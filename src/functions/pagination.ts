export const articlesPerPage = 9;

export const featuredPages = (articles: number, page: number) => {
  const maxSelectablePages = 5;
  const pages = Math.ceil(articles / articlesPerPage);

    const selectablePages: number[] = [];
      
    if (page <= 2) {
      for (let i = 1; i <= 5; i++) selectablePages.push(i);
    }
    else if (page === pages) {
      console.log('-1');
      for (let i = page - 4; i <= pages; i++) selectablePages.push(i);
    }
    else if (page === pages - 1) {
      console.log('-2')
      for (let i = page - 3; i <= pages; i++) selectablePages.push(i);
    }
    else for (let i = page - 2; i < page + maxSelectablePages - 2; i++) selectablePages.push(i);
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