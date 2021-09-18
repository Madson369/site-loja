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
            onClick={() => addFunc({ livro, units: 1 })}
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
