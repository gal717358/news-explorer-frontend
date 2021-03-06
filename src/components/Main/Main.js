import NewCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import { useLocation } from 'react-router-dom';
// import Preloader from '../Preloader/Preloader';
// import NotFound from '../NotFound/NotFound';

function Main() {
  const location = useLocation();
  return (
    <>
      <main className='main'>
        {/* <Preloader /> */}
        {/* <NotFound />  */}
        <NewCardList />
        {location.pathname === '/' && <About />}
      </main>
    </>
  );
}

export default Main;
