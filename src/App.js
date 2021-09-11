import "./App.css";
import { Input } from "semantic-ui-react";
import { Button, Icon, Label } from "semantic-ui-react";
import BookCard from "./components/BookCard.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  function onChange(event) {
    console.log(event.target.value);
  }

  const products = [
    {
      id: 1,
      booktitle: "Harry porta",
      bookauthor: "Autor: Mulher transfobica",
      imagesource:
        "https://media.discordapp.net/attachments/427876466575933440/885635778640744489/vaelwkn4phm71.png",
      description: "o menino que era muito bom a varinha",
    },

    {
      id: 2,
      booktitle: "Futuroama",
      bookauthor: "Autor: Sla porra",
      imagesource:
        "https://media.discordapp.net/attachments/239838587246346242/886052286453907456/1551398008572.jpg?width=724&height=676",
      description: "o futuro que amava ser o futuro",
    },

    {
      id: 3,
      booktitle: "Passadorama",
      bookauthor: "Autor: ronaldo gaucho",
      imagesource:
        "https://media.discordapp.net/attachments/239838587246346242/886052288068714547/Anotacao_2021-03-13_050734.png",
      description: "ronaldo chaugo brilha muito no corinrtias",
    },

    {
      id: 4,
      booktitle: "Google.com/androginia",
      bookauthor: "Autor: mark zukerberg",
      imagesource:
        "https://media.discordapp.net/attachments/239838587246346242/886052290899873802/Anotacao_2021-03-13_091054.png",
      description: "isso mesmo piranha eu não sou o jô soares",
    },

    {
      id: 5,
      booktitle: "Selo de garantia quebrado",
      bookauthor: "Autor: ybite",
      imagesource:
        "https://media.discordapp.net/attachments/239838587246346242/886052572249608232/ENbDpMLX0AAC-cq.jpg",
      description: "roubaram meu pc",
    },

    {
      id: 6,
      booktitle: "doença geneticas da dupla escrotal",
      bookauthor: "Autor: Dr.Droben",
      imagesource:
        "https://images-ext-2.discordapp.net/external/XT_ETDPdCMCC_uG8T3DT8MVJTWTQuhne6Y5ihlxcCX4/https/i.redd.it/bhn7puq76i761.png?width=495&height=676",
      description:'my balls itch',
      },
  ];

  return (
    <div className="teste">
      <div className="topo">
        <img
          classname="logo"
          className="item"
          src="https://media.discordapp.net/attachments/427876466575933440/885420040822857748/madso.png"
        ></img>
        <Input
          placeholder="Pesquisar..."
          className="input"
          className="item"
          onChange={onChange}
        ></Input>
        <Button className="item" as="div" labelPosition="left">
          <Button icon>
            <Icon name="cart" />
            Carrinho
          </Button>
        </Button>
      </div>
      <div>
        <h1>
          <NavBar></NavBar>{" "}
        </h1>
      </div>
      <div className="container">
        <div className="row">
          {products.map((p) => {
            return (
              <BookCard
                key={p.id}
                booktitle={p.booktitle}
                bookauthor={p.bookauthor}
                imagesource={p.imagesource}
                description={p.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
