import React, { useContext, useEffect } from "react";
import { Section } from "./AboutStyle";
import { IoArrowRedoCircle } from "react-icons/io5";
import ReusableHeader from "../Reusable/ReusableHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import { Store } from "../../StateStore";
import aboutImage from "../../Media/main.gif";
import { Constant } from "../../constant";

const About = () => {
  const { api } = useContext(Store);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Section id="about" data-aos="fade-up">
      <ReusableHeader
        pText="COMPIX trains students in industry relevent, employment-oriented
          skills through most advanced tools and technologies with the help of
          expert faculty."
        hText="Who we are"
        hColor={Constant.Colors.seconderyColor}
        pColor={Constant.Colors.mainColor}
      />
      <div className="content_container">
        <div className="content">
          <h1>We Are Expert In</h1>
          <p>
            We are Kashmir's first premier media and entertainment tranning
            institution offers power-packed courses that help shape a student's
            creative career with tailor-made programs catering to specific
            domains.
          </p>
          <p>
            COMPIX offers a variety of relevent and comprehensive programs to
            make students ready for a successful future.
          </p>
          <ul>
            {api.about?.map((item) => (
              <li key={item._id.$oid}>
                <IoArrowRedoCircle /> {item.courseDuration}
              </li>
            ))}
          </ul>
        </div>
        <div className="img_container">
          <figure>
            <img src={aboutImage} alt="about_background" loading="lazy"/>
          </figure>
        </div>
      </div>
    </Section>
  );
};

export default About;
