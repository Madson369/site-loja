import NavBar from "./NavBar.jsx";
import Topo from "./Topo.jsx";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { subtrair } from ".././actions/cart.js";
import { atualizar } from ".././actions/cart.js";
import { remover } from ".././actions/cart.js";
import { ChevronLeft } from "react-bootstrap-icons";
import { ChevronRight } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";

const Pagecart = () => {
  const dispatch = useDispatch();
  const carrinho = useSelector((state) => state.cart);

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

  return (
    <div>
      <Topo></Topo>
      <h1>
        <NavBar></NavBar>
      </h1>
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
                  <span className="textcart">Preço:{p.livro.price}R$</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pagecart;
