import UserRoute from './Routes/UserRoute';
import AdminRoute from './Routes/AdminRoute';
import { Route, Routes } from 'react-router';
import PrivateRoute from './Routes/PrivateRoute';
import { configureStore } from './redux/store';
import { Provider } from 'react-redux';


function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
    <Routes>
      <Route path='/*' element={<UserRoute />} />
      <Route element={<PrivateRoute />}>
        <Route path='/Admin/*' element={<AdminRoute />} />
      </Route>
    </Routes>
    </Provider>
  );
}

export default App;