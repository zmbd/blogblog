import { featuredArticlesType } from "../propTypes";

export const featuredArticles = (articles: featuredArticlesType, amount: number): featuredArticlesType => {
    const newArticles: featuredArticlesType = [];

    if (amount > articles.length) amount = articles.length;
    for (let i = 0; i < amount; i++) newArticles.push(articles[i]);

    return newArticles;
}