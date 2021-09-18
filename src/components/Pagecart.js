import Topo from "./Topo.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { subtrair, atualizar, remover, limpar } from ".././actions/cart.js";
import { ChevronLeft, ChevronRight, Trash } from "react-bootstrap-icons";

const Pagecart = () => {
  const dispatch = useDispatch();
  const carrinho = useSelector((state) => state.cart);
  const recebido = useSelector((state) => state.livros);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(recebido[0]);
  });

  function handlePlusFunc(product) {
    dispatch(atualizar(product));
  }

  function handleMinusFunc(product) {
    dispatch(subtrair(product));
  }

  function handleRemoveFunc(product) {
    const index = carrinho.indexOf(product, 0);
    dispatch(remover(index));
  }

  function handleClearFunc(product) {;
    dispatch(limpar([]));
  }

  let sum = carrinho
    .map((p) => {
      let total = 0;
      total = total + p.livro.price * p.units;
      //console.log(total);
      return total;
    })
    .reduce(function (a, b) {
      return a + b;
    }, 0);

    sum = sum.toFixed(2)

  //console.log(sum);

  return (
    <div>
      <Topo></Topo>
      <div className="containerpai">
        {/* <h1>
        <NavBar></NavBar>
      </h1> */}
        <div className="cartcontainer">
          <div className="cartdiv">
            <h1 className="titlecart">Carrinho de compras</h1>
            {carrinho.map((p) => {
              return (
                <div className="itemincart">
                  <div className="containeritemimg">
                    <img
                      className="cartitemimg"
                      alt="hmm"
                      src={p.livro.imagesource}
                    ></img>
                  </div>
                  <div>
                    <span className="textcart">{p.livro.booktitle}</span>
                  </div>
                  <div>
                    <ChevronLeft
                      className="arrows"
                      onClick={() => {
                        handleMinusFunc(p);
                      }}
                    ></ChevronLeft>

                    <span className="textcart">{p.units}</span>

                    <ChevronRight
                      className="arrows"
                      onClick={() => {
                        handlePlusFunc(p);
                      }}
                    ></ChevronRight>
                    <button
                      className="butaopica"
                      onClick={() => {
                        handleRemoveFunc(p);
                      }}
                    >
                      <Trash />
                      Remover
                    </button>
                  </div>
                  <div>
                    <span className="textcart">Preço:R${p.livro.price}</span>
                  </div>
                </div>
              );
            })}
            <div className="divdototal">
              {sum > 0 ? <span className="total">Total: R${sum} </span> : null}
              <Button className="botaocard" outline color="warning" onClick={() => {handleClearFunc()}} > 
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagecart;
