import "./Home.css";
import { useState, useEffect } from "react";
import BookCard from "./components/BookCard.jsx";
import NavBar from "./components/NavBar.jsx";
import Topo from "./components/Topo.jsx";
import { useSelector, useDispatch } from "react-redux";
import { adicionar } from "./actions/cart.js";
import { atualizar } from "./actions/cart.js";
import { receber } from "./actions/GetLivros.js";
import { getBooks } from "./components/GetBook";
import { Button } from "reactstrap";

function Home() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const recebido = useSelector((state) => state.livros);

  useEffect(() => {
    getBooks(dispatch);
  }, []);

  useEffect(() => {
    if (recebido) {
      console.log(recebido);
      setProducts(recebido[0]);
    }
  }, [recebido]);

  function onChange(event) {
    console.log(event.target.value);
  }

  // const products = [
  //   {
  //     id: 1,
  //     booktitle: "Harry porta",
  //     bookauthor: "Autor: Mulher transfobica",
  //     imagesource:
  //       "https://media.discordapp.net/attachments/427876466575933440/885635778640744489/vaelwkn4phm71.png",
  //     description: "o menino que era muito bom com a varinha",
  //     price: "50R$",
  //   },

  //   {
  //     id: 2,
  //     booktitle: "Futuroama",
  //     bookauthor: "Autor: Sla porra",
  //     imagesource:
  //       "https://media.discordapp.net/attachments/239838587246346242/886052286453907456/1551398008572.jpg?width=724&height=676",
  //     description: "o futuro que amava ser o futuro",
  //     price: "57R$",
  //   },

  //   {
  //     id: 3,
  //     booktitle: "Passadorama",
  //     bookauthor: "Autor: ronaldo gaucho",
  //     imagesource:
  //       "https://media.discordapp.net/attachments/239838587246346242/886052288068714547/Anotacao_2021-03-13_050734.png",
  //     description: "ronaldo chaugo brilha muito no corinrtias",
  //     price: "30R$",
  //   },

  //   {
  //     id: 4,
  //     booktitle: "Google.com/androginia",
  //     bookauthor: "Autor: mark zukerberg",
  //     imagesource:
  //       "https://media.discordapp.net/attachments/239838587246346242/886052290899873802/Anotacao_2021-03-13_091054.png",
  //     description: "isso mesmo piranha eu não sou o jô soares",
  //     price: "32R$",
  //   },

  //   {
  //     id: 5,
  //     booktitle: "Selo de garantia quebrado",
  //     bookauthor: "Autor: ybite",
  //     imagesource:
  //       "https://media.discordapp.net/attachments/239838587246346242/886052572249608232/ENbDpMLX0AAC-cq.jpg",
  //     description: "roubaram meu pc",
  //     price: "10R$",
  //   },

  //   {
  //     id: 6,
  //     booktitle: "doença geneticas da dupla escrotal",
  //     bookauthor: "Autor: Dr.Droben",
  //     imagesource:
  //       "https://images-ext-2.discordapp.net/external/XT_ETDPdCMCC_uG8T3DT8MVJTWTQuhne6Y5ihlxcCX4/https/i.redd.it/bhn7puq76i761.png?width=495&height=676",
  //     description: "my balls itch",
  //     price: "200R$",
  //   },
  // ];

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
      <div>
        <h1>
          <NavBar></NavBar>{" "}
        </h1>
      </div>
      <h1>
        Carrinho{" "}
        {carrinho.map((p) => {
          return (
            <ul>
              {p.livro.booktitle} | {p.units}
            </ul>
          );
        })}{" "}
      </h1>
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
