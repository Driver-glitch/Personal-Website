import React from "react";
import './AboutMeCard.css';
import Footer from '../footer/Footer';

function AboutMeCard() {
    return (

        <div className="hero-container">
           
            <video src='/videos/video-8.mp4' autoPlay loop muted />
            <div>
                <h1 className="timeOff text-white">
                    About Daniel
                </h1>
                
                <div className="center text-white">
                       <img className="dan"
                        src='images/img-14.jpg'
                        alt="dan"
                   
                    /> <p className="bio"> 
                        &nbsp;&nbsp;&nbsp; Daniel Rivera graduated from
                        Fullstack Academy as a Junior Software Engineer. He strives to
                        expand his knowledge to what is possible with code in order to
                        make life more efficient for all. During his time at Fullstack
                        Academy he created many projects using a text editor named
                        Visual Studio Code. He now has experience with Node.js,
                        Express.js, Postgresql,Ubuntu(WSL), GitBash,GitHub,Heroku,
                        JavaScript, HTML, CSS,React, and more.
                        <br></br><br></br> Daniel has always been around
                        technology ever since a little boy. His father was always
                        engaging him in building computers and teaching him the
                        aspects of technology. After the years of learning from his
                        father he had dreams to become a software engineer to serve
                        clients needs.
                        
                    </p>


                </div>
            </div>
            <div className="center text-white">
                <p>
                    <img className="marine"
                        src='images/img-13.jpg'
                        alt="daniel"
                
                    />He is a United States Marine Veteran
                </p>
            </div>
            <div className="center text-white">
                <img className="newOrleans"
                    src='images/img-12.jpg'
                    alt="new-orleans"
               
                />
                <p>  Traveled to New Orleans, Louisiana </p>
            </div>
            <div className="center text-white">
                <img className="oakHarbor"
                    src='images/img-10.jpg'
                    alt="oak-harbor"
                
                />
                <p> Traveled to Oak Harbor, Washington </p>
            </div>
            
            <div className="center text-white">
                <img className="motorcycle"
                    src='images/img-11.jpg'
                    alt="motorcycle"
                  
                />
                <p>     He loves to ride his bike on his free time.
                    <br></br> This bike is a 2012 Suzuki GSXR-600
                </p>
            </div>
            <div className="center text-white">

                <img className="jetski"
                    src='images/img-15.jpg'
                    alt="jetski"
               
                />
                <p>   Daniel loves to ride his Personal Watercraft on his free time.<br></br> This watercraft is a 2019 Seadoo GTX-230
                </p>
            </div>
            <div className="center text-white">
                <img className="truck"
                    src='images/img-16.jpg'
                    alt="truck"
                /> <p>He owns a 2008 Chevy Silverado
                </p>
                
            </div>

            <Footer />
        </div>



    );
}

export default AboutMeCard;
