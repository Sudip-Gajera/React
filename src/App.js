import UserRoute from './Routes/UserRoute';
import AdminRoute from './Routes/AdminRoute';
import { Route, Routes } from 'react-router';
import PrivateRoute from './Routes/PrivateRoute';


function App() {
  return (
    <Routes>
      <Route path='/*' element={<UserRoute />} />
      <Route element={<PrivateRoute />}>
        <Route path='/Admin/*' element={<AdminRoute />} />
      </Route>
    </Routes>
  );
}

export default App;