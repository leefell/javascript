import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>ou não :)</small>
      </Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Paragrafo>Esse é um parágrafo com underline</Paragrafo>
    </Container>
  );
}
