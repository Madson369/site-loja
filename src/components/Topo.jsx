import { Input } from "semantic-ui-react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";

const Topo = () => {
  let history = useHistory();

  function handleClick() {
    history.push(`/carrinho`);
  }

  function handleClickk() {
    history.push(`/`);
  }

  function onChange(event) {
    console.log(event.target.value);
  }

  return (
    <div className="topo">
      <img
        onClick={handleClickk}
        classname="logo"
        className="item"
        src="https://media.discordapp.net/attachments/427876466575933440/885420040822857748/madso.png"
        alt="hmm"
      ></img>
      <Input
        placeholder="Pesquisar..."
        className="input"
        className="item"
        onChange={onChange}
      ></Input>
      <Button classname='btn' className="item" onClick={handleClick}>
        <Cart></Cart>
        Carrinho
      </Button>
    </div>
  );
};

export default Topo;
