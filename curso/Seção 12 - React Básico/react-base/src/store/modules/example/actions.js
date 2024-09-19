// Actions fica responsável por disparar as mutations
import * as types from '../types';

export function clicaBotao() {
  return {
    type: types.BOTAO_CLICADO,
  };
}
