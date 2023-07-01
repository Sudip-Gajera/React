import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Header from '../User/components/Header';
import Footer from '../User/components/Footer';
import Home from '../User/containers/Home';
import Doctors from '../User/containers/Doctors';
import Department from '../User/containers/Department';
import About from '../User/containers/About';
import Contact from '../User/containers/Contact';
import Appointment from '../User/containers/Appointment';
import Doctor from '../User/containers/Doctor';
import Auth from '../User/containers/Auth';
import VisitingDoctors from '../User/containers/VisitingDoctors';
import NotFound from '../User/containers/NotFound';
import Medicine_User from '../User/containers/Medicine_User';

function UserRoute(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/department' element={<Department />} />
                <Route path='/doctors' element={<Doctors />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/appointment' element={<Appointment />} />
                {/* <Route path='/doctor/:id' element={<Doctor />} />
                <Route path='/doctor/visiting_doctors' element={<VisitingDoctors />} /> */}

                <Route path='/doctor/'>
                    <Route path=':id' element={<Doctor />} />
                    <Route path='visiting_doctors' element={<VisitingDoctors />} />
                </Route>
                <Route path='*' element={<NotFound />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/medicine' element={<Medicine_User />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoute;