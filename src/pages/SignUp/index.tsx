import React from 'react';

import { Container } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <form>
      <Input name="nome" type="text" placeholder="Nome" />

      <Input name="email" type="email" placeholder="E-mail" />

      <Input name="senha" type="password" placeholder="Senha" />

      <Button type="submit">Cadastrar</Button>
    </form>
  </Container>
);

export default SignUp;
