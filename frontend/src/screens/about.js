import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div style={styles.container}>
            <h1><Link to="/">Hello React Aboute Page</Link></h1>
        </div>
    )
};

export default About;


const styles = {
    container: {
        backgroundColor: "tomato",
    }
}