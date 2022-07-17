import App from './App';
import Provider from './Provider';
import AppContextProvider from './Context';

// eslint-disable-next-line react/display-name
export default () => (
  <AppContextProvider>
    <Provider>
      <App />
    </Provider>
  </AppContextProvider>
);
