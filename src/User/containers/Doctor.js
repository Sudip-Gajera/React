import React, { useState } from 'react';
import { useParams } from 'react-router';

function Doctor(props) {

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

    const { id } = useParams();
    const fdata = doctorData.filter((v) => parseInt(id) === v.id)[0];
    return (
        <div className="col-lg-10 m-auto ">
            <div className="member d-flex align-items-start d_member">
                <div className="pic"><img src={fdata.url} className="img-doctor d_img" alt /></div>
                <div className="member-info d_info">
                    <h3>{fdata.name}</h3>
                    <h5>{fdata.designation}</h5>
                    <p>{fdata.experience}</p>
                    <p>{fdata.description}</p>
                    <p>{fdata.about}</p>
                    <div className="social d_social">
                        <a href><i className="ri-twitter-fill" /></a>
                        <a href><i className="ri-facebook-fill" /></a>
                        <a href><i className="ri-instagram-fill" /></a>
                        <a href> <i className="ri-linkedin-box-fill" /> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctor;