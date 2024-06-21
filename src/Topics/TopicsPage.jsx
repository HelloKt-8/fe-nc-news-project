import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const TopicsPage = ({ articles }) => {
  const [articleByTopic, setArticleByTopic] = useState([]);
  const { topic_slug } = useParams();

  useEffect(() => {
    if (topic_slug) {
      const filteredArticles = articles.filter(
        (article) => article.topic === topic_slug
      );
      setArticleByTopic(filteredArticles);
    }
  }, [topic_slug]);

  return <div className= "articleList">
    {articleByTopic.map((article) => {
        return (
            <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <figure key={article.article_id} >
              <img src={article.article_img_url} alt={article.title} />
              <figcaption key={article.article_id}>{article.title}</figcaption>
            </figure>
          </Link>
        )
    })}

  </div>;
};

export default TopicsPage;
