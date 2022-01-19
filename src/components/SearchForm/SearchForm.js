function SearchForm() {
  return (
    <div className='SearchForm__container'>
      <h1 className='SearchForm__title'> What's going on in the world?</h1>
      <p className='SearchForm__text'>
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <div className='SearchForm__bar'>
        <input
          className='SearchForm__bar_input'
          type='text'
          placeholder='Nature'
        />
        <button className='SearchForm__bar_search'> Search </button>
      </div>
    </div>
  );
}

export default SearchForm;
