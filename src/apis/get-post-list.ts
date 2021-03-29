import { NotionAPI } from 'notion-client';
import { ARTICLE_URL } from './constant';

const api = new NotionAPI();

export const getPostList = async () => {
  const page = await api.getPage(ARTICLE_URL);
  const [collectionId, collectionViewId] = [Object.keys(page.collection)[0], Object.keys(page.collection_view)[0]];

  const root = await api.getCollectionData(collectionId, collectionViewId);

  const articles = root.result.blockIds
    .map((id) => root.recordMap.block[id])
    .filter((article) => article.role !== 'none');

  const properties = root.recordMap.collection && Object.values(root.recordMap.collection)[0].value.schema;

  if (!properties) return null;

  return articles.map((art) => {
    if (!art.value.properties) return art;
    const propertiesInArticle = Object.entries(properties).reduce((properties: any, [id, { name }]) => {
      if (id !== 'title' && name !== 'date' && name !== 'summary') {
        Array.isArray(art.value.properties[id])
          ? (properties[name] = art.value.properties[id][0][0])
          : (properties[name] = art.value.properties[id] || null);
      }
      if (name === 'date') {
        properties[name] = art.value.properties[id][0][1][0][1].start_date;
      }
      if (name === 'summary') {
        Array.isArray(art.value.properties[id])
          ? (properties[name] = art.value.properties[id]
              .reduce((acc: string | any[], val: any[]) => acc.concat(val[0] !== '⁍' ? val[0] : ''))
              .join(''))
          : (properties[name] = null);
      }
      // @ts-ignore
      properties.fullWidth = art.value.format?.page_full_width ?? false;
      return properties;
    }, {});

    const artMeta = {
      id: art.value.id,
      title: art.value.properties.title ? art.value.properties.title.join('') : null,
      ...propertiesInArticle,
    };
    if (artMeta.tags) {
      artMeta.tags = artMeta.tags.split(',');
    } else {
      artMeta.tags = null;
    }
    return artMeta;
  });
};
