import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logg.png';
import RightImage from '../../assets/images/cat.jpeg';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
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
            <div className='right-image-container'>
                {/* also change this image later */}
            <img src={RightImage} alt="Right Image" />
            </div>
        </div>
    );
}


export default Home