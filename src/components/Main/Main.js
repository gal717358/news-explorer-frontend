import SearchForm from '../SearchForm/SearchForm';
import NewCardList from '../NewsCardList/NewsCardList';
import NewsCard from '../NewsCard/NewsCard';
import About from '../About/About';
// import Preloader from '../Preloader/Preloader';
// import NotFound from '../NotFound/NotFound';

function Main(props) {
  return (
    <>
      <SearchForm />
      <NewCardList>
        <NewsCard />
      </NewCardList>
      {/* <Preloader /> */}
      {/* <NotFound />  */}
      <About />
    </>
  );
}

export default Main;
