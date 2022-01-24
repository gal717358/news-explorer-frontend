import NewsCard from '../NewsCard/NewsCard';
import { useLocation } from 'react-router-dom';

function NewCardList(props) {
  const location = useLocation();
  return (
    <div className='newCardList'>
      <div className='newCardList__container'>
        {location.pathname === '/' && (
          <h2 className='newCardList__title'>Search results</h2>
        )}

        <ul className='newCardList__cards'>
          {props.articles.slice(0, 3).map((data) => (
            <NewsCard key={props.articles.id} card={data} />
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
