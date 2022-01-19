import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import Login from '../Login/Login';
import Register from '../register/register';
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import MobileMenu from '../MobileMenu/MobileMenu';
import NavigationMobile from '../NavigationMobile/NavigationMobile';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const [isMeneOpen, setIsMeneOpen] = useState(false);

  const handleMenuPopup = () => {
    setIsMeneOpen(true);
  };

  const handleLoginPopup = () => {
    setIsLoginPopupOpen(true);
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
              onLoginPopupClick={handleLoginPopup}
              onMobileMenuClick={handleMenuPopup}
              isOpen={isMeneOpen}
              onClose={closeMenuPopup}
            />
            <NavigationMobile
              isOpen={isMeneOpen}
              onLoginPopupClick={handleLoginPopup}
            />
            <SavedNewsHeader />
            <SavedNews />
            <Footer />
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
            <Main />
            <Footer />
          </Route>
        </Switch>

        <Login
          isOpen={isLoginPopupOpen}
          isClose={closeAllPopups}
          onSwitchClick={handleSwitchLoginPopup}
        />
        <Register
          isOpen={isRegisterPopupOpen}
          isClose={closeAllPopups}
          isLoginOpen={isLoginPopupOpen}
          onSwitchClick={handleSwitchRegisterPopup}
          onToolTipClick={handleToolTipPopup}
        />

        <InfoToolTip isOpen={isToolTipOpen} isClose={closeAllPopups} />

        <PopupWithForm onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
