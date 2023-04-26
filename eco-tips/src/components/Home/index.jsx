import React, { useEffect } from 'react';
import ArticleList from './articles';

function Home() {
  // useEffect(() => {
  //   fetchArticles('https://www.actu-environnement.com/flux/rss/environnement/');
  // }, []);
  return (
    <div>
      <h1>Articles</h1>
      <ArticleList />
    </div>
  );
}

export default Home;
