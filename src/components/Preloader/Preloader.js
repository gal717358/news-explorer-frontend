import preloader from '../../images/preloader.svg';

function Preloader() {
  return (
  <div className="preloader">
    <img className="preloader__circle" src={preloader} alt="preloader" />
    <p className='preloader__text'>Searching for news...</p>
  </div>
  )
}

export default Preloader;
