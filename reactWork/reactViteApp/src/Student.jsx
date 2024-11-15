import React from "react";
import image from "./pexels-veeterzy-303383.jpg"

function Student(props) {
    return (
        <div className="main">

            <div className="icard">
                <img src={image} alt="image" />
                <h1>Student Details</h1>
                <p>Name: {props.name}</p>
                <p>DOB: {props.dob}</p>
                <p>Roll No:{props.roll_no}</p>
                <p>Course: {props.course}</p>

            </div>
        </div>
    );
}

export default Student;
