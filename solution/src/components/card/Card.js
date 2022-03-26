import { languages } from "../../helpers/data";
import Item from "../item/Item";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards-area-container">
      <div className="bars"></div>
      <h1 className="language-title">Languages</h1>
      <div className="cards-container">
        {languages.map((item, index) => {
          return <Item card={item} key={index} />;  // key = {id} bestpractice te yazilir fakat bu proede d olmadigi icin index yazildi. burada card uyerine baska bir seyde yazilablirdi.
        })}
      </div>
    </div>
  );
};

export default Card;


// asagidaki gibiyapilirsa ucun yol olurdu ve tek tek her bir kartin bu sekilde yapilmasi gerekiridi.
{/* <div>
 <img src={item.img} alt="" />
 <h3> {item.name} </h3>
</div> */}

// kisa yolu bu sekildedir (kodda oldugu gibi)
{/* <div className="cards-container">
        {languages.map((item, index) => {
          return <Item card={item} key={index} />;
        })}
</div> */}
