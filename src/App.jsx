import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import AppRoutes from './routes';
import { ToastProvider } from './context/ToastContext';

function App() {
  return (
    <ToastProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <AppRoutes />
          </Router>
        </PersistGate>
      </Provider>
    </ToastProvider>
  );
}

export default App;