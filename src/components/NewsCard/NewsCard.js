function NewsCard(props) {
  console.log(props);
  return (
    <div className='newsCard__container' key={props.card.id}>
      <img className='newsCard__image' src={props.card.src} alt='card' />
      <button type='button' className='newsCard__save-article'>
      </button>
      <div className='newsCard__save-article_error'>
        <p>Sign in to save articles</p>{' '}
      </div>
      <div className='newsCard__description'>
        <span className='newsCard__date'>{props.card.date}</span>
        <h2 className='newsCard__title'>{props.card.title}</h2>
        <p className='newsCard__text'>{props.card.text}</p>
        <span className='newsCard__source'>{props.card.span}</span>
      </div>
    </div>
  );
}
export default NewsCard;
