export const ARTICLES_PER_PAGE = 9;

export const pagination = (articles: any) => {
  const pages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const pageArticles = Array.from({ length: pages }, (_: any, index: number) => {
    const startIndex = index * ARTICLES_PER_PAGE;
    return articles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
  });

  return pageArticles;
}