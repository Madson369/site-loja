import Topo from "./Topo";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getSingleBook } from "./GetBook";
import { useParams } from "react-router-dom";
import { adicionar, atualizar } from "../actions/cart.js";
import { esvaziar } from "../actions/GetLivros";
import { Button } from "reactstrap";
import { toast } from "react-toastify";

const Status = () => {
  const dispatch = useDispatch();
  const recebido = useSelector((state) => state.livro);
  const carrinho = useSelector((state) => state.cart);

  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    return () => {
      setProduct([]);
      dispatch(esvaziar());
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

  const teste = () => {
    toast(`${product.booktitle} foi adicionado ao carrinho`, {
      className: "custom-toast",
      autoClose: 2500,
      position: "top-right",
      pauseOnHover: false,
      hideProgressBar: true,
    });
  };

  return (
    <div>
      <Topo></Topo>
      {product ? (
        <div>
          <div className="statuscontainer">
            <div className="productcontainer">
              <div className="productimgcontainer">
                <img
                  alt="teste"
                  className="productimg"
                  src={product.imagesource}
                ></img>
              </div>
              <div className="infocontainer">
                <h1>{product.booktitle}</h1>
                <span>
                  <b>{product.bookauthor}</b>
                </span>
                <div className='container_description'>
                  Descrição: <span>{product.description}</span>
                </div>
                <div className="pricecontainer">R${product.price}</div>
                <Button
                  className="botaocard"
                  outline
                  color="warning"
                  onClick={() => {
                    addFunc({ livro, units: 1 });
                    teste();
                  }}
                >
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Status;
