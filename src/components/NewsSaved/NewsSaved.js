function NewsSaved(props) {
  return (
    <div className='newsCard__container' key={props.card.id}>
      <img className='newsCard__image' src={props.card.src} alt='card' />
      <button type='button' className='newsCard__delete-article'>
      </button>
      <div className='newsCard__delete-article_hover'>
        <p>Remove from saved</p>
      </div>
      <div className='newsCard__image-tag'>
        <p>{props.card.tag}</p>
      </div>
      <div className='newsCard__description'>
        <span className='newsCard__date'>{props.card.data}</span>
        <h2 className='newsCard__title'>
        {props.card.title}
        </h2>
        <p className='newsCard__text'>
        {props.card.text}
        </p>
        <span className='newsCard__source'>{props.card.span}</span>
      </div>
    </div>
  );
}

export default NewsSaved;
