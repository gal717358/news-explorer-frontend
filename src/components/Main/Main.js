import NewCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

function Main(props) {
  const location = useLocation();
  return (
    <>
      <main className='main'>
        {location.pathname === '/' && !props.articles ? '' : (
           (props.articles ? (
            props.searchQuery === '' || props.totalResults === 0 ? (
              <NotFound />
            ) : (
              <NewCardList
                articles={props.articles}
                preloader={props.preloader}
                dataError={props.dataError}
                isLoggedIn={props.isLoggedIn}
                onSaveCard={props.onSaveCard}
                savedArticles={props.savedArticles}
                onDeleteCard={props.onDeleteCard}
                onRegisterPopupClick={props.onRegisterPopupClick}
              />
            )
          ) : (
            <Preloader />
          ))
        )
         }
        {}
        {location.pathname === '/' && <About />}
      </main>
    </>
  );
}

export default Main;
