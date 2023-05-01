import ArticleList from '@/components/Home/Articles';
import HomeAchievement from '@/components/Home/HomeAchievement';
import BilanAdeme from '@/components/Home/BilanAdeme';

function Home() {
  // useEffect(() => {
  //   fetchArticles('https://www.actu-environnement.com/flux/rss/environnement/');
  // }, []);
  return (
    <div className="flex flex-wrap gap-10 mx-40">
      <ArticleList />
      <HomeAchievement />
      <BilanAdeme />
    </div>
  );
}

export default Home;
