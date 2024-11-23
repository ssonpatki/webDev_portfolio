import React from 'react';
import { IoLogoWebComponent } from "react-icons/io5";

function HomePage() {
    return (
       <>
        <h2><IoLogoWebComponent /> My Web Development Portfolio</h2>
         <nav className="local">
            <a href="#careerGoals">Career Goals</a>
            <a href="#majorTechnologies">Major Technologies</a>
         </nav>

         <article id="careerGoals">
             <h3>Career Goals</h3>

             <p>
                    As a passionate learner and programmer, my career goals are focused on entering the field of either robotic intelligence development or game programming. 
                    In the realm of robotic intelligence, I aspire to explore the possiblities of uniting tangible objects and sophisticated AI systems that can learn, adapt, and 
                    perform complex tasks autonomously in the physical world. Alternatively, in game programming, I aim to develop immersive and interactive gaming experiences that 
                    captivate and engage players. Both fields offer unique challenges and opportunities for innovation, and I am eager to contribute to their advancement through my skills 
                    and creativity.
             </p>
         </article>

         <article id="majorTechnologies">
             <h3>Major Technologies</h3>

             <p>
                Throughout my studies and projects, I have gained a proficiency in several technologies that are crucial for web development and programming:
             </p>

             <ul>
                    <li>HTML: The backbone of web content, allowing the creation of structured and semantic web pages.</li>
                    <li>CSS: A powerful styling language used to design visually appealing and responsive web interfaces.</li>
                    <li>JavaScript: A versatile programming language for adding dynamic behavior and interactivity to web applications.</li>
                    <li>Node.js: A runtime environment for executing JavaScript server-side, enabling the development of scalable and high-performance applications.</li>
                    <li>MongoDB: A NoSQL database that allows for flexible and scalable data storage, often used in modern web applications.</li>
             </ul>
         </article>
         </>
    );
}
export default HomePage;