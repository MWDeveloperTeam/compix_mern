import React, { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Card from "./Card";
import { Course } from "./Style";
import ReusableHeader from "../Reusable/ReusableHeader";
import { Constant } from "../../constant";
import { Button } from "./CoursesButtons";
import AOS from "aos";
import "aos/dist/aos.css";
import { Store } from "../../StateStore";
import CourseModex from "./CourseModex";

const Courses = () => {
  const [sliderHandle, setSliderHandle] = useState(window.screen.width);
  const [isOpenCourseModel, setisOpenCourseModel] = useState(false);
  const [courseData, setCourseData] = useState("loading...");
  const ModelHandlerFunc = (dta) => {
    setisOpenCourseModel(!isOpenCourseModel);
    setCourseData(dta);
  };
  const { api } = useContext(Store);
  const coursesSliderRef = useRef(null);
  const SliderSetting = {
    centerPadding: "300px",
    slidesToShow: 4,
    infinite: true,
    ref: coursesSliderRef,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
    const sliderfunc = () => {
      setSliderHandle(window.innerWidth);
    };
    window.addEventListener("resize", sliderfunc);
  }, []);
  return (
    <Course id="courses" data-aos={!isOpenCourseModel ? "fade-up" : ""}>
      <div className="content_container">
        <ReusableHeader
          hText="What's Best For You"
          pText="We offer a variety of relevent and comprehensive programs to make a
            student ready for a successful future."
          hColor={Constant.Colors.seconderyColor}
          pColor="#222"
        />
      </div>
      <div className="card_container" style={{ paddingTop: "3rem" }}>
        {api.courses.map((curElem, i) => {
          return (
            <Card
              key={i}
              curElem={curElem}
              isOpenCourseModel={isOpenCourseModel}
              ModelHandlerFunc={ModelHandlerFunc}
            />
          );
        })}
      </div>

      {isOpenCourseModel ? (
        <CourseModex label={courseData} ModelHandlerFunc={ModelHandlerFunc} />
      ) : null}
    </Course>
  );
};

export default Courses;
