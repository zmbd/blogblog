export const articlesPerPage = 9;

export const featuredPages = (articles: number, page: number) => {
  const pages = Math.ceil(articles / articlesPerPage);
  const MAX_VISIBLE_PAGES = 5;
  const LOOP_END = pages < MAX_VISIBLE_PAGES ? pages : MAX_VISIBLE_PAGES;

  const selectablePages: number[] = [];
  let i: number;

  if (page <= 2) {
    for (i = 1; i <= LOOP_END; i++) selectablePages.push(i);
  }
  else if (page === pages) {
    for (i = page - 4; i <= pages; i++) selectablePages.push(i);
  }
  else if (page === pages - 1) {
    for (i = page - 3; i <= pages; i++) selectablePages.push(i);
  }
  else for (i = page - 2; i < page + LOOP_END - 2; i++) selectablePages.push(i);

  return selectablePages;
}

const pagination = (articles: any) => {
  const pages = Math.ceil(articles.length / articlesPerPage);

  const pageArticles = Array.from({ length: pages }, (_: any, index: number) => {
    const startIndex = index * articlesPerPage;
    return articles.slice(startIndex, startIndex + articlesPerPage);
  });

  return pageArticles;
}

export default pagination;