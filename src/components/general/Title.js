import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Title = ({ title }) => {
  useEffect(() => {
    Aos.init({ duration: 600, disable: "mobile" });
  }, []);

  return (
    <div className="section-title" data-aos="fade" data-aos-once="true">
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
