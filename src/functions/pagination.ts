export const articlesPerPage = 12;
const pagination = (articles: any) => {
  const pages = Math.ceil(articles.length / articlesPerPage);

  const pageArticles = Array.from({ length: pages }, (_: any, index: number) => {
    const startIndex = index * articlesPerPage;
    return articles.slice(startIndex, startIndex + articlesPerPage);
  });

  return pageArticles;
}

export default pagination;