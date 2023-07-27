import UserRoute from './Routes/UserRoute';
import AdminRoute from './Routes/AdminRoute';
import { Route, Routes } from 'react-router';
import PrivateRoute from './Routes/PrivateRoute';
import { configureStore } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  const {store, persistor} = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Routes>
      <Route path='/*' element={<UserRoute />} />
      <Route element={<PrivateRoute />}>
        <Route path='/Admin/*' element={<AdminRoute />} />
      </Route>
    </Routes>
    </PersistGate>
    </Provider>
  );
}

export default App;