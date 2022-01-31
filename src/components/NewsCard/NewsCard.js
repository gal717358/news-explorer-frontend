import { useLocation } from 'react-router-dom';

function NewsCard(props) {
  const location = useLocation();
  
  const { isLoggedIn, card } = props;

  const handleDeleteArticle = () => {
    props.onDeleteCard(card);
  };

  const handleSaveArticle = () => {
    if (isLoggedIn) {
      props.onSaveCard(card);
    }
    return;
  };

  return (
    <li className='newsCard__container'>
      {location.pathname === '/saved-articles' && (
        <>
          <button
            type='button'
            className='newsCard__delete-article'
            onClick={handleDeleteArticle}
          ></button>
          <div className='newsCard__delete-article_hover'>
            <p>Remove from saved</p>
          </div>
          <div className='newsCard__image-tag'>
            <p>{card.keyword}</p>
          </div>
        </>
      )}
      {location.pathname === '/' && (
        <>
          <button
            type='button'
            className={`newsCard__save-article ${card.saved === 'true' ? 'newsCard__save-article_saved' : 'newsCard__save-article'} `}
            onClick={!isLoggedIn ? props.onRegisterPopupClick : handleSaveArticle}
          ></button>
          {isLoggedIn ? (
            ''
          ) : (
            <div className='newsCard__save-article_type_error'>
              <p>Sign in to save articles</p>
            </div>
          )}
        </>
      )}
      <a
        className='newsCard__link-to'
        href={card.url}
        rel='noreferrer'
        target='_blank'
      >
        <img
          className='newsCard__image'
          src={card.urlToImage || card.image}
          alt='card'
        />
        <div className='newsCard__description'>
          <span className='newsCard__date'>
            {card.publishedAt || card.date}
          </span>
          <h2 className='newsCard__title'>{card.title}</h2>
          <p className='newsCard__text'>{card.description || card.text}</p>
          <cite className='newsCard__source'>
            {card.source.name || card.source}
          </cite>
        </div>
      </a>
    </li>
  );
}
export default NewsCard;
