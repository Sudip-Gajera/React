import React from 'react';
import Layout from '../Admin/components/Layout';
import { Route, Routes } from 'react-router';
import Doctors from '../Admin/containers/Doctors';
import Medicine from '../Admin/containers/Medicine/Medicine';
import DashBoard from '../Admin/containers/DashBoard';
import Department from '../Admin/containers/department/Department';

function AdminRoute(props) {
    return (
            <Layout>
                <Routes>
                    <Route path='/medicine' element={<Medicine />} />
                    <Route path='/doctor' element={<Doctors />} />
                    <Route path='/' element={<DashBoard />} />
                    <Route path='/department' element={<Department />} />
                </Routes>
            </Layout>
    );
}

export default AdminRoute;