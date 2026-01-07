import React from 'react';
import './About.css';


function About() {
    return (
        <div id="about" className='about'>
            <img className="profile-img" src="images/linkedin-profile-og.JPG" alt="jonathan-headshot" />

            <h1>Hello.</h1>
            <p className="intro-text">I am an alum from Texas A&M University '20. Current web developer-in-training with ambition for creative design!</p>
            <hr />
            {/* <div className="skill-row">
                <img className="code-img" src="https://media.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif" alt="code-img" />
                <h3>Full Stack Development</h3>
                <p>My love for UI/UX design originated from when I owned my first smartphone back in high school, the Samsung Galaxy s3. I am now looking to challenge myself in the field of web development and design with the goal of developing web applications. </p>
            </div>
            <div className="skill-row">
                <img className="pep-pizza" src="images/pep-pizza.png" alt="pizza" />
                <h3>My Greatest Passion</h3>
                <p>Despite my passion for exploring the ins and outs of web development, there is perhaps nothing I feel stronger about than the dislike for pineapple on pizza. The only "yellow" attribute that belongs on a pizza is a hefty layer of fresh cheese. </p>
            </div> */}
        </div>
    );
}

export default About;