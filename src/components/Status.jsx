import Topo from "./Topo";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getSingleBook } from "./GetBook";
import { useParams } from "react-router-dom";
import { adicionar , atualizar } from "../actions/cart.js";
import { esvaziar } from "../actions/GetLivros";
import { Button } from "reactstrap";

const Status = () => {
  const dispatch = useDispatch();
  const recebido = useSelector((state) => state.livro);
  const carrinho = useSelector((state) => state.cart);

  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    return () => {
      setProduct([]);
      dispatch(esvaziar())
    };
  }, []);

  useEffect(() => {
    getSingleBook(dispatch, id);
  }, [id]);

  useEffect(() => {
    if (recebido) {
      setProduct(recebido[0]);
    }
  }, [recebido]);

  const livro = product && {
    id: product.id,
    booktitle: product.booktitle,
    bookauthor: product.bookauthor,
    imagesource: product.imagesource,
    description: product.description,
    price: product.price,
  };

  function addFunc(produto) {
    const check = () => {
      for (let i = 0; i < carrinho.length; i++) {
        if (produto.livro.id === carrinho[i].livro.id) {
          return true;
        }
      }
    };

    const hasId = carrinho.some(check);
    if (!hasId) {
      dispatch(adicionar(produto));
    } else {
      dispatch(atualizar(produto));
    }
  }

  return (
    <div>
      <Topo></Topo>
      {product ? (
        <div>
          <div className="statuscontainer">
            <div className="productcontainer">
              <div className="productimgcontainer">
                <img alt='teste' className="productimg" src={product.imagesource}></img>
              </div>
              <div className="infocontainer">
                <h1>{product.booktitle}</h1>
                <span>{product.bookauthor}</span>
                <div>{product.description}</div>
                <div className="pricecontainer">R${product.price}</div>
                <Button
                  className="botaocard"
                  outline
                  color="warning"
                  onClick={() => addFunc({ livro, units: 1 })}
                >
                  Comprar
                </Button>
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
