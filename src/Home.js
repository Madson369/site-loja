import "./Home.css";
import { useState, useEffect } from "react";
import BookCard from "./components/BookCard.jsx";
import Topo from "./components/Topo.jsx";
import { useSelector, useDispatch } from "react-redux";
import { adicionar, atualizar } from "./actions/cart.js";
import { getBooks } from "./components/GetBook";

function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const recebido = useSelector((state) => state.livros);

  useEffect(() => {
    getBooks(dispatch);
  }, []);

  useEffect(() => {
    if (recebido) {
      //console.log(recebido);
      setProducts(recebido[0]);
    }
  }, [recebido]);


  const carrinho = useSelector((state) => state.cart);

  function handleAddFunc(product) {
    // console.log(carrinho.find((item) => item.livro.id === product.livro.id));

    const check = () => {
      for (let i = 0; i < carrinho.length; i++) {
        if (product.livro.id === carrinho[i].livro.id) {
          // carrinho[i].units++;

          return true;
        }
      }
    };

    const hasId = carrinho.some(check);
    //console.log(hasId);
    if (!hasId) {
      dispatch(adicionar(product));
    } else {
      dispatch(atualizar(product));
    }
  }
  return (
    <div>
      <Topo></Topo>

      {/* <h1>
        Carrinho{" "}
        {carrinho.map((p) => {
          return (
            <ul>
              {p.livro.booktitle} | {p.units}
            </ul>
          );
        })}{" "}
      </h1> */}
      <div className="container">
        <div className="row">
          {products && products.length > 0
            ? products.map((p) => (
                <BookCard
                  id={p.id}
                  booktitle={p.booktitle}
                  bookauthor={p.bookauthor}
                  imagesource={p.imagesource}
                  description={p.description}
                  price={p.price}
                  addFunc={handleAddFunc}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
