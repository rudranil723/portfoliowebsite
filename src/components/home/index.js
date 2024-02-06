import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import LogoTitle from '../../assets/images/logg.png';
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/2.png';
import image3 from '../../assets/images/3.jpeg';
import image4 from '../../assets/images/4.jpeg';
import './index.scss';


const Home = () => {
    useEffect(() => {
        // Place the jQuery code within the useEffect hook
        $(".option").click(function () {
          $(".option").removeClass("active");
          $(this).addClass("active");
        });
      }, []);     
    return (
        <div className="container home-page" >
            <div className="text-zone">
                <h1>hi,<br/>I'm,
                {/* we have to rmake the R photo but later */}
                <img className = 'namelogo' src={LogoTitle} style={{width: '40px', height: 'auto'}} alt="devloper"/>
                udranil
                <br/>
                <span className='web-devloper-text'>web devloper</span>
                </h1>
                <h2>Frontend devloper/ software devloper</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME</Link>
            </div>
            
            <div className='right-container'>
            <div class="options">
            <div class="option active option-background" style={{backgroundImage: `url(${image1})`}}>
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <i class="fas fa-calculator"></i>
                        </div>
                        <div class="info">
                            <div class="main">rudranil</div>
                            <div class="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
                <div class="option option-background" style={{backgroundImage: `url(${image2})`}} >
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <i class="fas fa-snowflake"></i>
                        </div>
                        <div class="info">
                            <div class="main">Oretemauw</div>
                            <div class="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
                <div class="option option-background" style={{backgroundImage: `url(${image3})`}} >
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <i class="fas fa-tree"></i>
                        </div>
                        <div class="info">
                            <div class="main">Iteresuselle</div>
                            <div class="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
                <div class="option option-background" style={{backgroundImage: `url(${image4})`}} >
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <i class="fas fa-tint"></i>
                        </div>
                        <div class="info">
                            <div class="main">Idiefe</div>
                            <div class="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}


export default Home