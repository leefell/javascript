import { createStore } from 'redux';

const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      // Um novo estado é criado com base no estado anterior
      // e esse novoEstado é retornado, não deve ser alterado o estado anterior
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
