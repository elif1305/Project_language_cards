import { languages } from '../../helpers/data';
import Item from '../item/Item';
import './Card.css';

const Card = () => {
  return (
    <div className="cards-area-container">
      <div className="bars"></div>
      <h1 className="language-title">Languages</h1>
      <div className="cards-container">
        {languages.map((item, index) => { // burada verdigimiz 'item' ile asagidaki 'item' ismi ayni olmak zorundadir.
          return <Item card={item} />;    // item componentine props yolluyoruz.
        })}
      </div>
    </div>
  );
};

export default Card;
