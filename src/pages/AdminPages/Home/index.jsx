import { api } from "../../../services/api";
import { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

import { Input } from "../../../components/Input";

import { FiSearch } from "react-icons/fi";

import { Carrosel } from "../../../components/Carrosel";
import macaronImage from "../../../assets/macaron.png";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [ingredient, setIngredient] = useState("");

  function handleSearch(value) {
    setSearch(value);
    setIngredient(value);
  }

  useEffect(() => {
    async function fetchDishes() {
      const responseDishe = await api.get(
        `/admin/dishes?name=${search}&ingredients`
      );
      const responseIngredient = await api.get(
        `/admin/dishes?name&ingredients=${ingredient}`
      );

      if (responseDishe.data.length < 1) {
        setDishes(responseIngredient.data);
      } else {
        setDishes(responseDishe.data);
      }
    }

    fetchDishes();
  }, [search, ingredient]);

  return (
    <Container>
      <Header>
        <Input
          placeholder={"Busque por pratos ou ingredientes"}
          icon={FiSearch}
          onChange={(e) => handleSearch(e.target.value)}
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
        {dishes.length > 0 ? (
          <Carrosel title={"Refeição"} dishesArray={dishes} />
        ) : (
          <></>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
