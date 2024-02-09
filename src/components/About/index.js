import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faAngular, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'; // Import individual icons
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'; // Import Loader component from react-loaders
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, []); 

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Hey!! I am Rudranil. Happy to see you here, I am an engineering student. I love to experience and explore technology. I like to code while listening to music.</p>
                <p>I am a student. It's been over a year since I am in this journey. I'm really happy to be on this road and welcome all the new challenges and triumphs ahead.
                    The comradery in the developer community is amazing to me. It keeps me motivated to work out problems when I'm completely stuck. My time and energy are dedicated to learning more and progressing each day to achieve my goal of being a dependable and knowledgeable software developer who clients and development teams want to work with.</p>
                <p>Thank you for your time.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/> {/* Make sure Loader component is correctly placed within JSX */}
        </>
        
    )
}

export default About;
