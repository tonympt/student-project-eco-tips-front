import Header from '@/components/Header';
import Card from '@/components/Card';
// fake datas
import { cards } from '@/assets/datas/data';

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-wrap gap-3 m-6">
        {cards.map((card) => (
          <div key={card.id}>
            <Card
              {...card}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
