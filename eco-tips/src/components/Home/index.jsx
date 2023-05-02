import ArticleList from '@/components/Home/Articles';
import HomeAchievement from '@/components/Home/HomeAchievement';
import LatestCard from '@/components/Community/LatestCard';

function Home() {
  return (
    <div className="flex flex-wrap gap-10 mx-auto w-[90%] place-content-center">
      <ArticleList />
      <LatestCard />
      <HomeAchievement />
    </div>
  );
}

export default Home;
