import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(
        'http://sebastiendurand1-server.eddi.cloud:8080/https://www.actu-environnement.com/flux/rss/environnement/',
      )
      .catch((err) => {
        console.log(err);
        setError('Le news feed n\'est pas accessible.');
      })
      .then((data) => new window.DOMParser().parseFromString(data.data, 'text/xml'))
      .then((data) => {
        const items = data.querySelectorAll('item');

        const parsedArticles = [];
        items.forEach((el) => {
          const article = {
            title: el
              .querySelector('title')
              .innerHTML.replace('<![CDATA[', '')
              .replace(']]>', ''),
            link: el.querySelector('link').innerHTML,
            description: el
              .querySelector('description')
              .innerHTML.replace('<![CDATA[', '')
              .replace(']]>', ''),
          };

          parsedArticles.push(article);
        });
        setArticles(parsedArticles);
      });
  }, []);

  if (error) {
    return (
      <div>
        <p>
          {error}
          <Link to="/">Aller à l'accueil</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      {articles.map((article) => (
        <div key={article.link}>
          <h2>{article.title}</h2>
          {/* <p>{article.pubDate}</p> */}
          {/* <p>{article.copyright}</p> */}
          <div className="description">{article.description}</div>
          <a href={article.link} target="_blank" rel="noreferrer">
            Lire la suite
          </a>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
