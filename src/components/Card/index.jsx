import { Container } from "./styles";
import { useNavigate, Link } from "react-router-dom";
import dishImg from "../../assets/dish.png";

export function Card({ icon: Icon, data, onClick, ...rest }) {
  const navigate = useNavigate();

  function handleNavigateToDetail() {
    navigate(`/details/${data.id}`);
  }

  function handleNavigateToEdit() {
    navigate(`/edit/${data.id}`);
  }

  return (
    <Container>
      <button onClick={handleNavigateToEdit}>
        {Icon && <Icon size={24} />}
      </button>
      <div onClick={handleNavigateToDetail}>
        <img src={dishImg} alt="" />
        <p className="disheName">{data.name}</p>
        <span className="description">{data.description}</span>
        <span className="price">{`R$${data.price.toFixed(2)}`}</span>
      </div>
    </Container>
  );
}
