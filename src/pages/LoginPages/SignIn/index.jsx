import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form } from "./styles";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import logoDesktop from "../../../assets/logoDesktop.png";

export function SignIn() {
  return (
    <Container>
      <header>
        <img src={logoDesktop} alt="" />
      </header>
      <Form>
        <main>
          <h2>Faça o Login</h2>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <Input></Input>
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

          <a href="">Criar conta</a>
        </main>
      </Form>
    </Container>
  );
}
