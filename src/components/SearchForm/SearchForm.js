function SearchForm(props) {
  return (
    <div className='searchForm'>
      <div className='SearchForm__container'>
        <h1 className='SearchForm__title'> What's going on in the world?</h1>
        <p className='SearchForm__text'>
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className='SearchForm__bar' onSubmit={props.onClick}>
          <input
            className='SearchForm__bar-input'
            type='text'
            placeholder='Nature'
            value={props.searchInput}
            onChange={props.onSearch}
          />
          <button type='submit' className='SearchForm__bar-search'>
            {' '}
            Search{' '}
          </button>
          {props.searchError === 'Please enter a keyword' ? (
            <p className='searchForm__bar-input-error'>
              {' '}
              Please enter a keyword
            </p>
          ) : (
            ''
          )}
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
