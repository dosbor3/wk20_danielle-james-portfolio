import React from 'react';
import image from '../../assets/cover/devPhoto.jpg';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">She Who Codes...</h1>
            <img src={image} className="my-2" alt="cover" />
        </section>        
    );
}
export default About;