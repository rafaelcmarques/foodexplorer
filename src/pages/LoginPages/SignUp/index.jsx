import { Link } from "react-router-dom";

import { Container, Form } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../../components/Button/index";
import { Input } from "../../../components/Input";
import logoDesktop from "../../../assets/logoDesktop.png";

export function SignUp() {
  return (
    <Container>
      <header>
        <img src={logoDesktop} alt="" />
      </header>

      <Form>
        <main>
          <h2>Crie sua conta</h2>
          <div className="input-wrapper">
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              icon={FiUser}
              placeholder="Exemplo: Maria da Silva"
              id={"name"}
            />
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              icon={FiMail}
              placeholder="Exemplo: exemplo@exemplo.com.br"
              id={"email"}
            />
            <label htmlFor="password">Senha</label>
            <Input
              type="password"
              icon={FiLock}
              placeholder="No mínimo 6 caracteres"
              id={"password"}
            />
            <Button title={"Entrar"} />
          </div>

          <Link to="/"> Já tenho uma conta</Link>
        </main>
      </Form>
    </Container>
  );
}
