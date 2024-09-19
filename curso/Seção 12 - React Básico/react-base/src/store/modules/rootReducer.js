// rootReducer combina todos os reducers da aplicação
import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';

export default combineReducers({
  exampleReducer,
  // Aqui viriam outros reducers
});
