import { Container, Content } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

import { Input } from "../../../components/Input";

import { FiSearch } from "react-icons/fi";

import macaronImage from "../../../assets/macaron.png";
import { Carrosel } from "../../../components/Carrosel";

export function Home() {
  const data = {
    name: "Spaguetti Gambe",
    description: "Massa fresca com camarões e pesto.",
    price: "32,97",
  };

  const carroselTest = [data, data, data, data, data, data, data];

  return (
    <Container>
      <Header>
        <Input
          placeholder={"Busque por pratos ou ingredientes"}
          icon={FiSearch}
        ></Input>
      </Header>
      <Content>
        <div className="rectangle">
          <div>
            <img src={macaronImage} alt="" />
          </div>

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
        <Carrosel title={"Refeição"} dishesArray={carroselTest} />
        <Carrosel title={"Sobremesa"} dishesArray={carroselTest} />
        <Carrosel title={"Bebidas"} dishesArray={carroselTest} />
      </Content>
      <Footer />
    </Container>
  );
}
