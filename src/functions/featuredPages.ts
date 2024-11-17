import { ARTICLES_PER_PAGE } from "../constants/constants";

export const featuredPages = (articles: number, page: number) => {
  const pages = Math.ceil(articles / ARTICLES_PER_PAGE);
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