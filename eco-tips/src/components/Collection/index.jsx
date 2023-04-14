import IconsAdd from '@/components/Collection/IconsAdd';
// // card component
// import Card from '@/components/Card';
// // fake datas to delete
// import {cards} from '@/assets/datas/data';

function Collection() {
  return (
    <div className="w-full mx-auto bg-white p-8 rounded-md shadow-md">
      <IconsAdd />
      <div className="flex flex-wrap gap-3 m-6">
        {/* //simulate collection
        {cards.map((card) => (
          <div key={card.id}>
            <Card
              {...card}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Collection;
