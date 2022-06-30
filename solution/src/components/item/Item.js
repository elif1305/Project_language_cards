import { useState } from 'react';
import './Item.css';

const Item = ({ card }) => {   // card.js den bu isimle gonderildi. bu nedenle bu isimle cagiriyoruz.
  const [showLogo, setShowLogo] = useState(true);  // import edilmesi unutulmamali

  const { name, img, options } = card;  // desct.

  const handleClick = () => {   // bestpractise bu sekilde yukarda yazilmasidir.
    setShowLogo(!showLogo);  
  };

  return (
    // onClick={() => setShowlogo(!showLogo)} seklinde buraya da yani bi alt satirda , bu sekildede yazilablirdi. ya da burada yapildigi gibi handleClick denerek yukarda tanimlanabilir. showlogoyu false a cevir demek.
    <div className="card" onClick={handleClick}>  
      {showLogo ? (  // showlogo true ise bunu goster
        <div>
          <img className="card-logo" src={img} alt="" />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (   // showlogo false ise bunu goster
        <ul className="list">
          {options.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
