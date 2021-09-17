import Topo from "./Topo";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getSingleBook } from "./GetBook";
import { useParams } from "react-router-dom";

const Status = () => {
  const dispatch = useDispatch();
  const recebido = useSelector((state) => state.livro);

  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getSingleBook(dispatch, id);
  }, [id]);

  useEffect(() => {
    if (recebido) {
      setProduct(recebido[0]);
      console.log(product);
    }
  }, [recebido]);

//   const livro = product && {
//     bookauthor: product.bookauthor,
//     booktitle: product.booktitle,
//     description: product.description,
//     id: product.id,
//     imagesource: product.imagesource,
//     price: product.price,
//   };
  return (
    <div>
      <Topo></Topo>
      {product ? (
        <div>
          <div className="statuscontainer">
            <div className="productcontainer">
              <div className="productimgcontainer">
                <img className="productimg" src={product.imagesource}></img>
              </div>
              <div className="infocontainer">
                <h1>{product.booktitle}</h1>
                <span>{product.bookauthor}</span>
                <h2>{product.description}</h2>
                <div className="pricecontainer">R${product.price}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "trouxa"
      )}
    </div>
  );
};

export default Status;
