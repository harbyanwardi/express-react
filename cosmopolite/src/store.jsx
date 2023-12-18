// store.js
import { createStore } from 'redux';

const initialState = {
  token: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
