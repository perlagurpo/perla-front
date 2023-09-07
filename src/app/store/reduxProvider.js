'use client';
import { Provider } from 'react-redux';
import store from './store';

/**
 * Wrapper que requiere correr en el cliente. Distribuye el estado global los componentes hijos
 * @param {*} children
 */
export default function ReduxProvider({ children }) {
  return(
    <Provider store={store}>
      {children}
    </Provider>
  );
}