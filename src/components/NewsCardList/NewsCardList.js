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
        {location.pathname === '/' && (
          <ul className='newCardList__cards'>
            {!props.articles
              .slice(0, visible)
              .map((data) => (
                <NewsCard
                  key={data.url}
                  card={data}
                  isLoggedIn={props.isLoggedIn}
                  onDeleteCard={props.onDeleteCard}
                  savedArticles={props.savedArticles}
                  onRegisterPopupClick={props.onRegisterPopupClick}
                />
              ))
              ? props.dataError
              : props.articles
                  .slice(0, visible)
                  .map((data) => (
                    <NewsCard
                      key={data.url}
                      card={data}
                      isLoggedIn={props.isLoggedIn}
                      onSaveCard={props.onSaveCard}
                      onDeleteCard={props.onDeleteCard}
                      savedArticles={props.savedArticles}
                      onRegisterPopupClick={props.onRegisterPopupClick}
                    />
                  ))}
          </ul>
        )}

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

        {visible <
        (location.pathname === '/saved-articles'
          ? props.savedArticles.length
          : 100) ? (
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
