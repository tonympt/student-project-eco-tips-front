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
        items.forEach((el, index) => {
          if (index < 4) { // on affiche seulement les quatre premiers éléments
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
              pubDate: el
                .querySelector('pubDate')
                .innerHTML.replace('<![CDATA[', '')
                .replace(']]>', ''),
              image: el
                .querySelector('image')
                .innerHTML.replace('<url>', '')
                .replace('</url>', ''),
              category: el
                .querySelector('category')
                .innerHTML.replace('<![CDATA[', '')
                .replace(']]>', ''),
              author: el
                .querySelector('author')
                .innerHTML.replace('/[', '')
                .replace('/ Actu-Environnement', ''),
            };

            parsedArticles.push(article);
          }
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
    <div className="grid grid-cols-2 gap-4 max-w-md ">
      {articles.map((article) => (
        <div key={article.link} className="p-2 bg-white p-1 rounded-md shadow-md box-border h-100 w-60 border-4 ... ">
          <h2 className="font-bold text-start text-sm">{article.title}</h2>
          <p className="text-xs text-center pt-2">
            {article.category}
            {' '}
            par
            {' '}
            {article.author}

          </p>
          <img className="object-contain mb-3" src={article.image} alt={article.image} />

          <div className="text-sm line-clamp-3">{article.description}</div>
          <p className="text-xs ">{article.copyright}</p>
          <a className="mt-10" href={article.link} target="_blank" rel="noreferrer">
            Lire la suite
          </a>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
