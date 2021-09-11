import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
function BookCard(props) {
  function handleClick() {
    console.log("click");
  }

  let booktitle = props.booktitle;
  let bookauthor = props.bookauthor;
  let imagesource = props.imagesource;
  let description = props.description;

  return (
    <div className='col-4'>
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
          <Button className='botaocard' outline color="warning" onClick={handleClick}>
            Comprar
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default BookCard;
