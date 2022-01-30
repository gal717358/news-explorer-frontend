import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
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
import * as mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';

function App() {
  const history = useHistory();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const [isMeneOpen, setIsMeneOpen] = useState(false);
  const [articles, setArticles] = useState(null);
  const [savedArticles, setSavedArticles] = useState({});
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('bitcoin');
  const [searchError, setSearchError] = useState('');
  const [totalResults, setTotalResults] = useState([]);
  const [preloader, setPreloader] = useState(false);
  const [dataError, setDataError] = useState('');
  const [isToken, setIsToken] = useState(localStorage.getItem('token'));
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isSaved, setIsSaved] = useState([]);
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
  });
  //logout
  const handleLogOut = (e) => {
    e.preventDefault();
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    }
  };

  // register
  const handleSubmitRegister = () => {
    if (
      !values.email ||
      !values.password ||
      !values.name ||
      values.password.length < 4
    ) {
      return;
    }
    mainApi
      .register(values)
      .then(() => {
        resetForm();
        handleToolTipPopup();
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`...Error: ${err}`);
      });
  };

  //login
  const handleSubmitLogin = () => {
    if (!values.email || !values.password || values.password.length < 4) {
      return;
    }
    mainApi
      .login(values)
      .then((res) => {
        setIsToken(res.token);
        resetForm();
        closeAllPopups();
        handleIsLoggedIn();
      })
      .catch((err) => console.log(err));
  };

  //checkToken
  useEffect(() => {
    if (isToken) {
      mainApi
        .checkToken(isToken)
        .then((res) => {
          setIsToken(isToken);
          setIsLoggedIn(true);
          history.push('/');
        })
        .catch((err) => {
          console.log(`...Error: ${err}`);
        });
    }
  }, [history, isToken]);

  //userInfo
  useEffect(() => {
    if (isToken) {
      mainApi
        .getUserInfo(isToken)
        .then((res) => {
          const userData = res.data;
          setCurrentUser(userData);
        })
        .catch((err) => console.log(err));
    }
  }, [isToken]);

  //getArticles
  useEffect(() => {
    if (searchQuery === '') {
      return setSearchError('Please enter a keyword');
    } else setSearchError('');
    newsApi
      .getArticles(searchQuery)
      .then((data) => {
        setTotalResults(data.totalResults);
        setArticles(data.articles);
        setPreloader(true);
      })
      .catch((err) => {
        setDataError(err.message);
      });
  }, [searchError, searchQuery]);

  //getUserArticles
  useEffect(() => {
    if (isToken) {
      mainApi
        .getUserArticles(isToken)
        .then((res) => {
          setSavedArticles(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [isToken]);

  //saveArticle
  const handleSaveArticle = (card) => {
    if (isLoggedIn) {
      mainApi
        .saveArticle(isToken, card, searchQuery)
        .then((newArticle) => {
          setSavedArticles([...savedArticles, newArticle]);
          setArticles((state) =>
            state.map((c) => (c.title === card.title ? { ...c } : c)),
          );
        })
        .catch((err) => console.log(err));
    }
  };
  //deleteArticle
  const handleDeleteArticle = (card) => {
    mainApi
      .deleteArticle(isToken, card._id)
      .then(() => {
        setSavedArticles(savedArticles.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetForm = () => {
    setValues({
      email: '',
      password: '',
      name: '',
    });
  };
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setPreloader(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleIsLoggedIn = () => {
    setIsLoggedIn(true);
  };

  const handleMenuPopup = () => {
    setIsMeneOpen(true);
  };

  const handleLoginPopup = () => {
    setIsLoginPopupOpen(true);
  };

  const handleRegisterPopup = () => {
    setIsRegisterPopupOpen(true);
  };

  const handleToolTipPopup = () => {
    setIsToolTipOpen(true);
  };

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
  }

  function closeMenuPopup() {
    setIsMeneOpen(false);
  }
  function closeToolTip() {
    setIsToolTipOpen(false);
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
        closeMenuPopup();
        closeToolTip();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  return (
    <div className='page'>
      <div className='page__container'>
        <CurrentUserContext.Provider value={currentUser}>
          <Switch>
            <ProtectedRoute
              exact
              path='/saved-articles'
              isLoggedIn={isLoggedIn}
            >
              <Navigation
                onMobileMenuClick={handleMenuPopup}
                isOpen={isMeneOpen}
                onClose={closeMenuPopup}
                logout={handleLogOut}
              />
              <NavigationMobile isOpen={isMeneOpen} logout={handleLogOut} />
              <SavedNewsHeader savedArticles={savedArticles} />
            </ProtectedRoute>

            <Route path='/'>
              <Header
                onLoginPopupClick={handleRegisterPopup}
                onMobileMenuClick={handleMenuPopup}
                isOpen={isMeneOpen}
                onClose={closeMenuPopup}
                isLoggedIn={isLoggedIn}
                logout={handleLogOut}
              />
              <MobileMenu
                isOpen={isMeneOpen}
                onLoginPopupClick={handleLoginPopup}
                currentUser={currentUser}
                isLoggedIn={isLoggedIn}
                logout={handleLogOut}
              />
              <SearchForm
                onSearch={handleSearchChange}
                searchInput={searchInput}
                onClick={handleSearchSubmit}
                searchError={searchError}
              />
            </Route>
          </Switch>
          <Main
            articles={articles}
            preloader={preloader}
            totalResults={totalResults}
            dataError={dataError}
            isLoggedIn={isLoggedIn}
            onSaveCard={handleSaveArticle}
            savedArticles={savedArticles}
            onDeleteCard={handleDeleteArticle}
            onRegisterPopupClick={handleRegisterPopup}
          />
          <Footer />
          <Login
            isOpen={isLoginPopupOpen}
            isClose={closeAllPopups}
            onSwitchClick={handleSwitchLoginPopup}
            handleChange={handleChange}
            values={values}
            onSubmit={handleSubmitLogin}
          />
          <Register
            isOpen={isRegisterPopupOpen}
            isClose={closeAllPopups}
            onSwitchClick={handleSwitchRegisterPopup}
            handleChange={handleChange}
            values={values}
            onSubmit={handleSubmitRegister}
          />

          <InfoToolTip
            isOpen={isToolTipOpen}
            isClose={closeToolTip}
            onLoginPopupClick={handleSwitchTooltipPopup}
          />
          <PopupWithForm onClose={closeAllPopups} />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
