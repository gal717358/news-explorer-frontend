import { CardData } from '../CardsData';
import NewsCard from '../NewsCard/NewsCard';

function NewCardList(props) {
  return (
    <div className='newCardList__container'>
      <h1 className='newCardList__title'>Search results</h1>
      <div className='newCardList__cards'>
        {CardData.slice(0, 3).map((data) => (
          <NewsCard key={data.id} card={data} />
        ))}
      </div>
      <button className='newCardList__button' type='button'>
        Show more
      </button>
    </div>
  );
}

export default NewCardList;
