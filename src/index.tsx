import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store, persistedStore } from './app/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
import { AlertProvider } from './app/context/alert';
import { AuthProvider } from './app/context/auth';
import { ChakraProvider } from '@chakra-ui/react';
import Alert from './common/components/alert';
import GlobalErrorBoundary from './common/components/ErrorBoundry';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ChakraProvider>
          <GlobalErrorBoundary>
            <AlertProvider alert={<Alert/>}>
              <AuthProvider>
                <App/>
              </AuthProvider>
            </AlertProvider>
          </GlobalErrorBoundary>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
