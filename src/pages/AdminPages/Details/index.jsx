import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
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
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  const handleNavigate = () => {
    navigate(`/edit/${params.id}`);
  };

  useEffect(() => {
    async function fetchDishe() {
      const response = await api.get(`/admin/dishes/${params.id}`);
      setData(response.data);
    }
    fetchDishe();
  }, []);

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

        {data && (
          <div className="DisheInfo">
            <img src={disheImg} alt="Imagem do Prato" />
            <div>
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              <div className="tagPlace">
                {data.ingredients.map((ingredient) => {
                  return <Tag title={ingredient.name} />;
                })}
              </div>
              <Button title={"Editar prato"} onClick={handleNavigate} />
            </div>
          </div>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
