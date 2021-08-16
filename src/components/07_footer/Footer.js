import React from "react";
import SocialLinks from "../../data/constants/socialLinks";
import { Link } from "gatsby";

const Footer = ({ darkFooter }) => {
  return (
    <div className={`${darkFooter ? "footer" : "footer light-footer"}`}>
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>copyright&copy;{new Date().getFullYear()}</h4>
        <Link to="/legal" className="legal-disclosure">
          Legal Disclosure
        </Link>
      </div>
    </div>
  );
};

export default Footer;
