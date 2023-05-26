import { Link, useNavigate } from "react-router-dom";
import { FiUpload, FiSearch } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Container, Content, Form, Image } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { NewTag } from "../../../components/NewTag";
import { Input } from "../../../components/Input";

import { Button } from "../../../components/Button";

export function Edit() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/details/id");
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
              <input type="text" id="name" placeholder="Ex.: Salada Ceaser " />
            </label>

            <label htmlFor="category">
              Categoria
              <select id="category" name="Categoria">
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
                <NewTag isNew placeholder={"Adicionar"} />
                <NewTag value={"Pão Naan"} />
              </div>
            </div>

            <div>
              <label htmlFor="price">
                Preço
                <input type="text" placeholder="R$00,00" />
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
            ></textarea>
          </label>

          <div className="btnWrapper">
            <Button title={"Excluir Prato"} />
            <Button title={"Salvar alterações"} onClick={handleNavigate} />
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
