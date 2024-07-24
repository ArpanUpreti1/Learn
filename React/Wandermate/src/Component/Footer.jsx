import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb-footer-links">
                    <div className="sb_footer-links-div">
                        <h4 className="">About Wandermate</h4>
                        <a href="/"><p>Home</p></a>
                        <a href="/"><p>About us</p></a>
                        <a href="/"><p>Destination</p></a>
                        <a href="/"><p>Tours</p></a>
                        <a href="/"><p>Hotels</p></a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Explore</h4>
                        <a href="/"><p>Flights</p></a>
                        <a href="/"><p>Car Rental</p></a>
                        <a href="/"><p>Activity</p></a>
                        <a href="/"><p>Deals</p></a>
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Trip Advisor Sites</h4>
                        <a href="/"><p>Contact Us</p></a>
                        <a href="/"><p>Terms Of Policy</p></a>
                        <a href="/"><p>Privacy Policy</p></a>
                    </div>
                </div>
                <p style={{color:"black",fontWeight:"500"}}>&copy; 2024 Wandermate LLC All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
