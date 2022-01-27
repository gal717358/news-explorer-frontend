import { useLocation } from 'react-router-dom';

function NewsCard(props) {
  const location = useLocation();

  return (
      <li className='newsCard__container' key={props.card.id}>
        <img className='newsCard__image' src={props.card.src} alt='card' />
        {location.pathname === '/saved-articles' && (
          <>
            <button type='button' className='newsCard__delete-article'></button>
            <div className='newsCard__delete-article_hover'>
              <p>Remove from saved</p>
            </div>
            <div className='newsCard__image-tag'>
              <p>{props.card.tag}</p>
            </div>
          </>
        )}
        {location.pathname === '/' && (
          <>
            <button type='button' className='newsCard__save-article'></button>
            <div className='newsCard__save-article_type_error'>
              <p>Sign in to save articles</p>
            </div>
          </>
        )}

        <div className='newsCard__description'>
          <span className='newsCard__date'>{props.card.date}</span>
          <h2 className='newsCard__title'>{props.card.title}</h2>
          <p className='newsCard__text'>{props.card.text}</p>
          <cite className='newsCard__source'>{props.card.span}</cite>
        </div>
      </li>
  );
}
export default NewsCard;
