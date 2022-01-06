// ----- IMPORT -----
import React from 'react';
import './Footer.css';
import linkedin from '../../Assets/Icons/linkedin.png' ;
import github from '../../Assets/Icons/github.png' ;
import twitter from '../../Assets/Icons/twitter.png' ;
import instagram from '../../Assets/Icons/instagram.png' ;
// ------------------


const Footer = () => {

    return(
        <footer className="footer">
            <div className="f1 subfooter">
                <a className="text-footer" href="https://mathieumarcelino.fr">mathieumarcelino.fr</a>
            </div>
            <div className="f2 subfooter">
                <div className="social">
                    <a href="https://www.linkedin.com/in/mathieumarcelino/"><img className="socialicon" src={linkedin} alt="linkedin icon"></img></a>
                    <a href="https://github.com/mathieumarcelino"><img className="socialicon" src={github} alt="github icon"></img></a>
                    <a href="https://twitter.com/mathieuenreel"><img className="socialicon" src={twitter} alt="twitter icon"></img></a>
                    <a href="https://www.instagram.com/mathi3u/"><img className="socialicon" src={instagram} alt="instagram icon"></img></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;