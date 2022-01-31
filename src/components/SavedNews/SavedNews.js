import NewsCard from '../NewsCard/NewsCard';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function SavedNews(props) {
  const location = useLocation();
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className='main'>
      <div className='newCardList'>
        <div className='newCardList__container'>
          {location.pathname === '/saved-articles' && (
            <ul className='newCardList__cards'>
              {props.savedArticles.slice(0, visible).map((data) => (
                <NewsCard
                  key={data._id}
                  card={data}
                  isLoggedIn={props.isLoggedIn}
                  onSaveCard={props.onSaveCard}
                  savedArticles={props.savedArticles}
                  onDeleteCard={props.onDeleteCard}
                  onRegisterPopupClick={props.onRegisterPopupClick}
                />
              ))}
            </ul>
          )}

          {visible < props.savedArticles.length ? (
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
    </div>
  );
}

export default SavedNews;
