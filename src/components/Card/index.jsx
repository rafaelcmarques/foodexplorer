import { Container } from "./styles";
import dishImg from "../../assets/dish.png";

export function Card({ icon: Icon, data, onClick, ...rest }) {
  return (
    <Container>
      <button onClick={onClick}>{Icon && <Icon size={24} />}</button>

      <img src={dishImg} alt="" />
      <p className="disheName">{data.name}</p>
      <span className="description">{data.description}</span>
      <span className="price">{`R$${data.price}`}</span>
    </Container>
  );
}
