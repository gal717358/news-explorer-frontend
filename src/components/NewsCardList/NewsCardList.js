import { CardData } from '../CardsData';
import NewsCard from '../NewsCard/NewsCard';
import { useLocation } from 'react-router-dom';


function NewCardList() {
  const location = useLocation();
  return (
    <div className='newCardList'>
      <div className='newCardList__container'>
      {location.pathname === '/' && (
          <h2 className='newCardList__title'>Search results</h2>
        )}
        
        <ul className='newCardList__cards'>
          {CardData.slice(0, 3).map((data) => (
            <NewsCard key={data.id} card={data} />
          ))}
        </ul>
        <button className='newCardList__button' type='button'>
          Show more
        </button>
      </div>
    </div>
  );
}

export default NewCardList;
