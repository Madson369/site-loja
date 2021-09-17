import { Input } from "semantic-ui-react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Search from "./Search.jsx";

const Topo = () => {
  let history = useHistory();

  const recebido = useSelector((state) => state.livros)[0];

  function handleClick() {
    history.push(`/carrinho`);
  }

  function handleClickk() {
    history.push(`/`);
  }

  const [evento, setEvento] = useState("");

  function onChange(event) {
    setEvento(event.target.value);
    //
    //
  }

  useEffect(() => {}, [evento]);

  return (
    <div className="topo">
      <img
        onClick={handleClickk}
        classname="logo"
        className="item"
        src="https://media.discordapp.net/attachments/427876466575933440/885420040822857748/madso.png"
        alt="hmm"
      ></img>
      <div className="inputcontainer">
        <Input
          placeholder="Pesquisar..."
          className="input"
          className="item"
          onChange={onChange}
        />
        <Search evento={evento} data={recebido}></Search>
      </div>
      <Button classname="btn" className="item" onClick={handleClick}>
        <Cart></Cart>
        Carrinho
      </Button>
    </div>
  );
};

export default Topo;
