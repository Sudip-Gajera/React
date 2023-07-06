import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

function PrivateRoute({Component}) {
    const navigate = useNavigate();
    useEffect(()=> {
        let login = localStorage.getItem('login');
        if (!login) {
            navigate('/auth')
        }
    },[])
    return (
        <div>
           <Component /> 
        </div>
    );
}

export default PrivateRoute;