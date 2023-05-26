import { Link } from "react-router-dom";
import { Container, Content } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Tag } from "../../../components/Tag";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useNavigate } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";

import disheImg from "../../../assets/dish.png";

export function Details() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/edit/:id");
  };

  return (
    <Container>
      <Header>
        <Input
          placeholder={"Busque por pratos ou ingredientes"}
          icon={FiSearch}
        ></Input>
      </Header>
      <Content>
        <header>
          <Link to={-1}>
            <MdKeyboardArrowLeft /> voltar
          </Link>
        </header>

        <div className="DisheInfo">
          <img src={disheImg} alt="Imagem do Prato" />
          <div>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <div className="tagPlace">
              <Tag title={"cebola"} />
              <Tag title={"alface"} />
              <Tag title={"pão naan"} />
              <Tag title={"pepino"} />
              <Tag title={"tomate"} />
            </div>
            <Button title={"Editar prato"} onClick={handleNavigate} />
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
