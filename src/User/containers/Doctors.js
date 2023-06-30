import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Doctors(props) {

    const doctorData = [
        {
            id: 1,
            name: "Atha Smith",
            designation: "Chief Medical Officer",
            experience: "14 Years Experience Overall  (8 years as specialist)",
            url: "../assets/img/doctors/doctors-1.jpg",
            about: "Dr. Atha Smith specializations are the child & adolescent problems, parenting issues, psychiatric problems in adults & old aged people, sexual disorders & marital therapy, de-addiction, headache, stress, anxiety, depression, psychotic illnesses, memory & sleep problems. Life is beautiful & people are amazing. Dedicated to the beautiful life is his services as a caring, skilled professional, involved at simplifying what is often a very complicated and confusing area of health care.",
            description: "Duis sagittis rutrum neque, quis tincidunt arcu pretium ac."
        },
        {
            id: 2,
            name: "John White",
            designation: "Anesthesiologist",
            experience: "12 Years Experience Overall  (6 years as specialist)",
            url: "../assets/img/doctors/doctors-2.jpg",
            about: "Dr. John White specializations are the child & adolescent problems, parenting issues, psychiatric problems in adults & old aged people, sexual disorders & marital therapy, de-addiction, headache, stress, anxiety, depression, psychotic illnesses, memory & sleep problems. Life is beautiful & people are amazing. Dedicated to the beautiful life is his services as a caring, skilled professional, involved at simplifying what is often a very complicated and confusing area of health care.",
            description: "Aenean ac turpis ante. Mauris velit sapien."
        },
        {
            id: 3,
            name: "Umika Loha",
            designation: "Cardiology",
            experience: "9 Years Experience Overall  (5 years as specialist)",
            url: "../assets/img/doctors/doctors-3.jpg",
            about: "Dr. Umika Loha specializations are the child & adolescent problems, parenting issues, psychiatric problems in adults & old aged people, sexual disorders & marital therapy, de-addiction, headache, stress, anxiety, depression, psychotic illnesses, memory & sleep problems. Life is beautiful & people are amazing. Dedicated to the beautiful life is his services as a caring, skilled professional, involved at simplifying what is often a very complicated and confusing area of health care.",
            description: "Curabitur luctus eleifend odio. Phasellus placerat mi."
        },
        {
            id: 4,
            name: "Daimy Smith",
            designation: "Neurosurgeon",
            experience: "12 Years Experience Overall  (7 years as specialist)",
            url: "../assets/img/doctors/doctors-4.jpg",
            about: "Dr. Daimy Smith specializations are the child & adolescent problems, parenting issues, psychiatric problems in adults & old aged people, sexual disorders & marital therapy, de-addiction, headache, stress, anxiety, depression, psychotic illnesses, memory & sleep problems. Life is beautiful & people are amazing. Dedicated to the beautiful life is his services as a caring, skilled professional, involved at simplifying what is often a very complicated and confusing area of health care.",
            description: "Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus."
        }
    ]

    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title">
                    <h2>Doctors</h2>
                    <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                        tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                        ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                    <Link to='/doctor/visiting_doctors'>Visiting Doctors</Link>
                </div>
                <div className="row">
                    {
                        doctorData.map((v) => {
                            return (
                                <>
                                    <div className="col-lg-6">
                                        <div className="member d-flex align-items-start">
                                            <div className="pic"><img src={v.url} className="img-doctor" alt /></div>
                                            <div className="member-info">
                                                <Link to={/doctor/ + v.id}><h4>{v.name}</h4></Link>
                                                <span>{v.designation}</span>
                                                <p>{v.description}</p>
                                                <div className="social">
                                                    <a href><i className="ri-twitter-fill" /></a>
                                                    <a href><i className="ri-facebook-fill" /></a>
                                                    <a href><i className="ri-instagram-fill" /></a>
                                                    <a href> <i className="ri-linkedin-box-fill" /> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Doctors;