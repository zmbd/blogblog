import { ARTICLES_PER_PAGE } from "../constants/constants";

export const pagination = (articles: any) => {
  const pages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const pageArticles = Array.from({ length: pages }, (_: any, index: number) => {
    const startIndex = index * ARTICLES_PER_PAGE;
    return articles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
  });

  return pageArticles;
}