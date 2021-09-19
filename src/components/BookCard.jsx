import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function BookCard({
  id,
  booktitle,
  bookauthor,
  imagesource,
  description,
  price,
  addFunc,
}) {
  let history = useHistory();

  function onClick(id) {
    history.push(`/sobre/${id}`);
  }

  const livro = {
    id,
    booktitle,
    bookauthor,
    imagesource,
    description,
    price,
  };

  const teste = () => {
    toast(`${booktitle} foi adicionado ao carrinho`, {
      className: "custom-toast",
      autoClose: 2500,
      position: "top-right",
      pauseOnHover: false,
      hideProgressBar:true,


    });
  };

  return (
    <div className="col-4">
      <Card className="cardlivro">
        <div className="imgcontainer">
          <CardImg
            className="fotolivro"
            top
            src={imagesource}
            alt="Card image cap"
          />{" "}
        </div>
        <CardBody>
          <CardTitle tag="h5">{booktitle}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {bookauthor}
          </CardSubtitle>

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
          <Button
            className="botaocard"
            outline
            color="warning"
            onClick={() => onClick(livro.id)}
          >
            Ver mais
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default BookCard;
