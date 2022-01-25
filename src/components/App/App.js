import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch, useHistory } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Login from '../Login/Login';
import Register from '../register/register';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import MobileMenu from '../MobileMenu/MobileMenu';
import NavigationMobile from '../NavigationMobile/NavigationMobile';
import SearchForm from '../SearchForm/SearchForm';
import newsApi from '../../utils/NewsApi';

function App() {
  const history = useHistory();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const [isMeneOpen, setIsMeneOpen] = useState(false);
  const [articles, setArticles] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('bitcoin');
  const [searchError, setSearchError] = useState('');
  const [totalResults, setTotalResults]= useState([]);
  const [preloader, setPreloader] = useState(false);
  const [dataError, setDataError] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setPreloader(true)
  };

  useEffect(() => {
    if (searchQuery === '') {
      return setSearchError('Please enter a keyword');
    } else setSearchError('');
    newsApi.getArticles(searchQuery).then((data) => {
      setTotalResults(data.totalResults)
      setArticles(data.articles);
      setPreloader(true)
    })
    .catch((err) => {
      setDataError(err.message)
    })
  }, [searchError, searchQuery]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleMenuPopup = () => {
    setIsMeneOpen(true);
  };

  const handleLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  // const handleToolTipPopup = () => {
  //   setIsToolTipOpen(true);
  // };

  const handleSwitchLoginPopup = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(true);
  };

  const handleSwitchRegisterPopup = () => {
    setIsLoginPopupOpen(true);
    setIsRegisterPopupOpen(false);
  };

  const handleSwitchTooltipPopup = () => {
    setIsToolTipOpen(false);
    setIsLoginPopupOpen(true);
  };

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsToolTipOpen(false);
  }

  function closeMenuPopup() {
    setIsMeneOpen(false);
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
        closeMenuPopup();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  return (
    <div className='page'>
      <div className='page__container'>
        <Switch>
          <Route path='/saved-articles'>
            <Navigation
              onMobileMenuClick={handleMenuPopup}
              isOpen={isMeneOpen}
              onClose={closeMenuPopup}
            />
            <NavigationMobile isOpen={isMeneOpen} />
            <SavedNewsHeader />
          </Route>

          <Route path='/'>
            <Header
              onLoginPopupClick={handleLoginPopup}
              onMobileMenuClick={handleMenuPopup}
              isOpen={isMeneOpen}
              onClose={closeMenuPopup}
            />
            <MobileMenu
              isOpen={isMeneOpen}
              onLoginPopupClick={handleLoginPopup}
            />
            <SearchForm
              onSearch={handleSearchChange}
              searchInput={searchInput}
              onClick={handleSearchSubmit}
              searchError={searchError}
            />
          </Route>
        </Switch>
        <Main articles={articles} searchQuery={searchQuery} preloader={preloader} totalResults={totalResults} dataError={dataError}/>
        <Footer />
        <Login
          // loginSubmit={handleSubmitLogin}
          isOpen={isLoginPopupOpen}
          isClose={closeAllPopups}
          onSwitchClick={handleSwitchLoginPopup}
          handleChange={handleChange}
        />
        <Register
          isOpen={isRegisterPopupOpen}
          isClose={closeAllPopups}
          onSwitchClick={handleSwitchRegisterPopup}
          handleChange={handleChange}
        />

        <InfoToolTip
          isOpen={isToolTipOpen}
          isClose={closeAllPopups}
          onLoginPopupClick={handleSwitchTooltipPopup}
        />
        <PopupWithForm onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
