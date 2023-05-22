import { Container } from "./styles";
import dishImg from "../../assets/dish.png";
import { Button } from "../Button";

export function CardWithButtons({ icon: Icon, data, onClick, ...rest }) {
  return (
    <Container>
      <button onClick={onClick}>{Icon && <Icon size={24} />}</button>

      <img src={dishImg} alt="Imagem do prato" />
      <p className="disheName">{data.name}</p>
      <span className="description">{data.description}</span>
      <span className="price">{`R$${data.price}`}</span>
      <div className="btnWrapper">
        <div className="btnQuantity">
          <button>-</button>
          <input type="number" id="quantity" value={"01"} />
          <button>+</button>
        </div>
        <Button title={"incluir"}></Button>
      </div>
    </Container>
  );
}
