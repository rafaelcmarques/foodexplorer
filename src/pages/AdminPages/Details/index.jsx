import { Container, Content } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Tag } from "../../../components/Tag";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { Button } from "../../../components/Button";

import disheImg from "../../../assets/dish.png";

export function Details() {
  return (
    <Container>
      <Header />
      <Content>
        <header>
          <a href="">
            <MdKeyboardArrowLeft /> voltar
          </a>
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
            <Button title={"Editar prato"} />
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
