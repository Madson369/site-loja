import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
function BookCard({
  id,
  booktitle,
  bookauthor,
  imagesource,
  description,
  price,
  addFunc,
}) {
  // function handleClick() {
  //   console.log("click");
  // }

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
          <CardText>{description}</CardText>

          <Button
            className="botaocard"
            outline
            color="warning"
            onClick={() => addFunc({ livro, units: 1 })}
          >
            Comprar
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default BookCard;
