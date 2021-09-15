import NavBar from "./NavBar.jsx";
import Topo from "./Topo.jsx";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { subtrair } from ".././actions/cart.js";
import { atualizar } from ".././actions/cart.js";

const Pagecart = () => {
  const dispatch = useDispatch();
  const carrinho = useSelector((state) => state.cart);

  function handlePlusFunc(product) {
    dispatch(atualizar(product));
  }

  function handleMinusFunc(product) {
    dispatch(subtrair(product));
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
                  <img className="cartitemimg" src={p.livro.imagesource}></img>
                </div>
                <div>
                  <span className="textcart">{p.livro.booktitle}</span>
                </div>
                <div>
                  <span className="textcart">Quantidade:{p.units}</span>
                  <Button
                    onClick={() => {
                      handlePlusFunc(p);
                    }}
                  >
                    +
                  </Button>

                  <Button
                    onClick={() => {
                      handleMinusFunc(p);
                    }}
                  >
                    -
                  </Button>
                </div>
                <div>
                  <span className="textcart">Preço:{p.livro.price}</span>
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
