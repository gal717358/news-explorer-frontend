import { CardData } from '../CardsData';
import NewsSaved from '../NewsSaved/NewsSaved';

function SavedNews() {
  return (
    <div className='savedNews__container'>
      <div className='savedNews__cards'>
        {CardData.map((data) => (
          <NewsSaved key={data.id} card={data} />
        ))}
      </div>
    </div>
  );
}
export default SavedNews;
