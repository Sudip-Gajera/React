import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router';

function PrivateRoute() {
        let login = localStorage.getItem('login');
    return (
        login? <Outlet /> : <Navigate to={"/auth"}/>
    );
}

export default PrivateRoute;