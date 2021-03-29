import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();

export const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf');
