import UserRoute from './Routes/UserRoute';
import AdminRoute from './Routes/AdminRoute';
import { Route, Routes } from 'react-router';


function App() {
  return (
    <Routes>
      <Route path='/*' element={<UserRoute />} />
      <Route path='/Admin/*' element={<AdminRoute />} />
    </Routes>
  );
}

export default App;