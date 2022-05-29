import { featuredArticlesType } from "../propTypes";

const featuredArticles = (articles: featuredArticlesType, amount: number): featuredArticlesType => {
    const newArticles: featuredArticlesType = [];

    for (let i = 0; i < amount; i++) newArticles.push(articles[i]);

    return newArticles;
}

export default featuredArticles;