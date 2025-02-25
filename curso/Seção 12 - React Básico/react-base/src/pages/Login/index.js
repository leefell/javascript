import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as example from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch();
  }

  return (
    <Container>
      <Title>
        Login
        <small>ou não :)</small>
      </Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Paragrafo>Esse é um parágrafo com underline</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
