import { useContext } from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function SavedNewsHeader(props) {
const currentUser = useContext(CurrentUserContext)

const keyWords = props.savedArticles.map((data) => ' ' + data.keyword );
const list = [...new Set(keyWords)];
  return (
    <div className='savedNewsHeader'>
      <div className='savedNewsHeader__container'>
        <p className='savedNews__title'>Saved articles</p>
        <h1 className='savedNews__info'>{currentUser.name}, you have {props.savedArticles.length} saved articles</h1>
        <p className='savedNews__keywords'>
          By keywords: 
          <span className='savedNews__keywords_span'>
          {`${
            list.length > 3
              ? `${list.slice(0, 2)}  and ${list.length - 2} other..`
              : `${list.slice(0, 3)}`
          }`}
          </span>
        </p>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
