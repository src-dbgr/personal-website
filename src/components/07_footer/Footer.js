import React from "react";
import SocialLinks from "../../data/constants/socialLinks";
import { Link } from "gatsby";

const Footer = ({ darkFooter }) => {
  return (
    <div className={`${darkFooter ? "footer" : "footer light-footer"}`}>
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>copyright&copy;{new Date().getFullYear()}</h4>
        <div>
          <Link to="/legal" className="legal-disclosure">
            Legal Notice | Impressum
          </Link>
          <Link to="/privacy" className="legal-disclosure">
            Privacy Policy | Datenschutzerklärung
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
