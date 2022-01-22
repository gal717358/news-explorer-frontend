function SavedNewsHeader() {
  return (
    <div className='savedNewsHeader'>
      <div className='savedNewsHeader__container'>
        <p className='savedNews__title'>Saved articles</p>
        <h1 className='savedNews__info'>Gal, you have 5 saved articles</h1>
        <p className='savedNews__keywords'>
          By keywords:
          <span className='savedNews__keywords_span'>
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
