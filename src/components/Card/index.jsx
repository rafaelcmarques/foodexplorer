import { Container } from "./styles";
import { useNavigate, Link } from "react-router-dom";
import dishImg from "../../assets/dish.png";

export function Card({ icon: Icon, data, onClick, ...rest }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/edit/:id");
  }

  return (
    <Container>
      <button onClick={handleNavigate}>{Icon && <Icon size={24} />}</button>
      <Link to="/details/:id">
        <img src={dishImg} alt="" />
        <p className="disheName">{data.name}</p>
        <span className="description">{data.description}</span>
        <span className="price">{`R$${data.price}`}</span>
      </Link>
    </Container>
  );
}
