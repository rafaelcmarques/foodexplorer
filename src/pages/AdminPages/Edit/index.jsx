import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";
import { api } from "../../../services/api";
import { FiUpload, FiSearch } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Container, Content, Form, Image } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { NewTag } from "../../../components/NewTag";
import { Input } from "../../../components/Input";

import { Button } from "../../../components/Button";

export function Edit() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const alert = useAlert();

  const handleNavigate = () => {
    navigate("/details/id");
  };

  async function deleteDishe() {
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza de que deseja deletar este prato?",
      buttons: [
        {
          label: "Sim",
          onClick: () => {
            api
              .delete(`/admin/dishes/${params.id}`)
              .then(() => {
                alert.success("Prato deletado com sucesso!");
                navigate("/");
              })
              .catch((error) => {
                if (error.response) {
                  alert.error(error.response.data.message);
                } else {
                  alert.error("Não foi possível excluir o prato.");
                }
              });
          },
        },
        {
          label: "Não",
          onClick: () => {
            return;
          },
        },
      ],
    });
  }

  useEffect(() => {
    async function fetchDishe() {
      const response = await api.get(`/admin/dishes/${params.id}`);
      setData(response.data);
    }
    fetchDishe();
    console.log(data);
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
        {data && (
          <Form>
            <Link to={-1}>
              <MdKeyboardArrowLeft /> voltar
            </Link>
            <h1>Editar Prato</h1>

            <div>
              <Image>
                <p>Imagem</p>
                <label className="imageLabel" htmlFor="image">
                  <FiUpload size={20} />
                  <span>Selecione a imagem</span>
                  <input id="image" type="file" />
                </label>
              </Image>

              <label htmlFor="name">
                Nome
                <input
                  type="text"
                  id="name"
                  placeholder="Ex.: Salada Ceaser "
                  value={data.name}
                />
              </label>

              <label htmlFor="category">
                Categoria
                <select id="category" name="Categoria" value={data.category}>
                  <option value="entrada">Escolha uma opção</option>
                  <option value="entrada">Entrada</option>
                  <option value="refeicao">Prato Principal</option>
                  <option value="sobremesa">Sobremesa</option>
                </select>
              </label>
            </div>

            <div>
              <div>
                <p>Ingredientes</p>
                <div className="ingredientPlace">
                  <NewTag isNew={true} placeholder={"adicionar"} />
                  {data.ingredients.map((ingredient) => {
                    return <NewTag value={ingredient.name} />;
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="price">
                  Preço
                  <input type="text" placeholder="R$00,00" value={data.price} />
                </label>
              </div>
            </div>

            <label htmlFor="description">
              Descrição
              <textarea
                id="description"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                cols="30"
                rows="10"
                value={data.description}
              ></textarea>
            </label>

            <div className="btnWrapper">
              <Button title={"Excluir Prato"} onClick={deleteDishe} />
              <Button title={"Salvar alterações"} onClick={handleNavigate} />
            </div>
          </Form>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
