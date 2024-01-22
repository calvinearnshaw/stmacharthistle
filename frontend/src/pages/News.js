import useFetch from '../hooks/useFetch';
import {Link} from "react-router-dom";

export const News = () => {
    const {data: articles, isPending, error} = useFetch(process.env.REACT_APP_BACKEND + "/api/news");

    return (
        <div className="subpage">
            <div className="news">
                <h1>News</h1>
                <div className="news-category">
                    <h2>Club News</h2>
                    {
                        articles && articles.map((article) => {
                            return (
                                <Link to={"/news/" + article._id} className={"news-link"}>
                                    <div className={"news-entry"}>
                                        <img src={article.newsImage} alt={"news"} />
                                        <div className={"news-details"}>
                                            <h3>{article.newsType}</h3>
                                            <h2>{article.newsTitle}</h2>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="news-category">
                    <h2>Matchday Information</h2>
                    {
                        articles && articles.map((article) => {
                            return (
                                <Link to={"/news/" + article._id} className={"news-link"}>
                                    <div className={"news-entry"}>
                                        <img src={article.newsImage} alt={"news"} />
                                        <div className={"news-details"}>
                                            <h3>{article.newsType}</h3>
                                            <h2>{article.newsTitle}</h2>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="news-category">
                    <h2>Player Information</h2>
                    {
                        articles && articles.map((article) => {
                            return (
                                <Link to={"/news/" + article._id} className={"news-link"}>
                                    <div className={"news-entry"}>
                                        <img src={article.newsImage} alt={"news"} />
                                        <div className={"news-details"}>
                                            <h3>{article.newsType}</h3>
                                            <h2>{article.newsTitle}</h2>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}