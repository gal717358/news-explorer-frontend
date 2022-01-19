import notFound from '../../images/not-found.svg';

function NotFound() {
  return (
    <div className='notFound'>
      <img className='notFound__image' src={notFound} alt='not-found' />
      <h3 className='notFound__title'>Nothing found</h3>
      <p className='notFound__text'>
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NotFound;
