import { Container, Content } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Tag } from "../../../components/Tag";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { TbReceipt } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";

import disheImg from "../../../assets/dish.png";

export function Details() {
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
            <div className="btnWrapper">
              <div className="btnQuantity">
                <button>-</button>
                <input type="number" id="quantity" value={"01"} />
                <button>+</button>
              </div>
              <Button icon={TbReceipt} title={"pedir ∙ R$ 25,00"}></Button>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
