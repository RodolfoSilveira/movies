import './config/ReactotronConfig';
import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
};

export default App;
