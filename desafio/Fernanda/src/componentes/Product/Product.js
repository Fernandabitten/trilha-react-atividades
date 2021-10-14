import { useContext } from "react";
import { MyContext } from "../../context/context";
//import "./product.css";
import "../../pages/CheckoutPage/checkout.css";
import BinImg from "../../img/bin.png";
import { useHistory } from "react-router-dom";
import {ProductBox} from "./Product.styled";

function Product({ itemName, item, idItem }) {
  const { deleteItemFromCart } = useContext(MyContext);

  const history = useHistory();
  const irParaDetalharFilme = () => {
    history.push(`/movies/${idItem}`);  
  };

  const onRemoveProduct = () => {
    deleteItemFromCart(idItem);
  };

  return (
    <ProductBox >
      <div>
        <div className="thumbnail">
          <>
            <img
              onClick={irParaDetalharFilme}
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={""}
            />
          </>
        </div>

        <div className="detail">
          <div className="name"  style={{width:"300px"}}>
            <h4>{itemName}</h4>
          </div>          
          <div className="price">R$ {(item.vote_average * 10).toFixed(2)}</div>
        </div>

        <div className="col right">
          <div className="remove">
            <img onClick={onRemoveProduct} src={BinImg} alt={""} />
          </div>
        </div>
      </div>
    </ProductBox>
  );
}

export default Product;
