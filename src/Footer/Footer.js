import React from "react";
import "./Footer.css";
import fbImage from '../images/facebook.svg';
import twitterImage from '../images/twitter.svg';
import linkedinImage from '../images/linkedin.svg';
import instaImage from '../images/instagram.svg';
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        
                        <ul><h4>For Business</h4>
                       <li> <a href="/employer">
                            <p>Employer</p>
                        </a></li>
                        <li><a href="/healthplan"><p>Health Plan</p></a></li>
                        <li><a href="/individual"><p>Individual</p></a></li>
                        </ul>
                    </div>
                    <div className="sb__footer-links_div">
                   <ul> <h4>Resource</h4>
                        <li><a href="/resource">
                            <p>Resource center</p>
                        </a></li>
                        <li> <a href="/resource"><p>Testimonials</p></a></li>
                        <li> <a href="/resource"><p>STV</p></a></li>
                        </ul>
                    </div>
                    <div className="sb__footer-links_div">
                    <ul><h4>Partners</h4>
                    <li><a href="/employer">
                            <p>Swing Tech</p>
                        </a></li>
                        </ul>
                    </div>
                    <div className="sb__footer-links_div">
                    <ul><h4>Company</h4>
                    <li> <a href="/aboutus">
                            <p>About</p>
                        </a></li>
                        <li><a href="/press"><p>Press</p></a></li>
                        <li> <a href="/career"><p>Career</p></a></li>
                        <li>  <a href="/contactus"><p>Contact</p></a></li>
                        </ul>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Coming Soon on</h4>
                        <div className="socialmedia">
                            <p><img src={fbImage} alt=""/></p>
                            <p><img src={twitterImage} alt=""/></p>
                            <p><img src={linkedinImage} alt=""/></p>
                            <p><img src={instaImage} alt=""/></p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Footer;