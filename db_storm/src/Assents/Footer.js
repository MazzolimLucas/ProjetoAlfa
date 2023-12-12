import React from "react";
import "./Assents.css";

export default function Footer(){
    return(
        <div className="Footer">

            <div className="information-footer">
            <ul>
                <li className="footer-topic">DOOGEE</li>
                <li><a href="#">Teardown</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms of Use</a></li>
            </ul>

            <ul>
                <li className="footer-topic">Social</li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Youtube</a></li>
            </ul>

            <ul>
                <li className="footer-topic">Service</li>
                <li><a href="#">Compare</a></li>
                <li><a href="#">Download</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">Bug Report</a></li>
            </ul>

            <ul>
                <li className="footer-topic">Activity</li>
                <li><a href="#">Influencers</a></li>
                <li><a href="#">Affiliate</a></li>
                <li><a href="#">Co-branding</a></li>
                <li><a href="#">Honor</a></li>
                <li><a href="#">Giveaway</a></li>
            </ul>
            </div>

            <div className="menssage-footer">

                <div>
                <p className="menssage-title-footer">Newsletter Subscription</p>
                <input type="email" placeholder=" Subscribe to our newsletter" className="input-email-footer"/>
                <button>Subscribe</button>
                </div>

            </div>

        </div>
    )
}