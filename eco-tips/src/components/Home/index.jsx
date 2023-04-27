
import ArticleList from './articles';

function Home() {
  // useEffect(() => {
  //   fetchArticles('https://www.actu-environnement.com/flux/rss/environnement/');
  // }, []);
  return (
    <div className="max-w-lg">
      <h1 className=" inline text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-500 m-4">Eco-Articles</h1>
    
      <ArticleList />
    </div>
  );
}

export default Home;
