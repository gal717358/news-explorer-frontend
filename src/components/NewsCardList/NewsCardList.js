import NewsCard from '../NewsCard/NewsCard';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function NewCardList(props) {
  const location = useLocation();
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className='newCardList'>
      <div className='newCardList__container'>
        {location.pathname === '/' && (
          <h2 className='newCardList__title'>Search results</h2>
        )}

        <ul className='newCardList__cards'>
          {!props.articles
            .slice(0, visible)
            .map((data) => <NewsCard key={data.url} card={data} />)
            ? props.dataError
            : props.articles
                .slice(0, visible)
                .map((data) => <NewsCard key={data.url} card={data} />)}
        </ul>
        {visible < 100 ? (
          <button
            className='newCardList__button'
            type='button'
            onClick={showMoreItems}
          >
            Show more
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default NewCardList;
