import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Constant } from "../../constant/index";
import Slider from "react-slick";
import ReusableHeader from "../Reusable/ReusableHeader";
import SliderCard from "./SliderCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Button } from "./TestimonialButtons";
import AOS from "aos";
import "aos/dist/aos.css";
import { Store } from "../../StateStore";

const Testimonial = () => {
  const [sliderHandle, setSliderHandle] = useState(window.screen.width);
  const [isOpen, setIsOpen] = useState(sliderHandle > 768 ? 2 : null);

  const demom = (i) => {
    setIsOpen((prevIndex) => (prevIndex === i ? null : i));
  };

  const array = [1, 2, 3];

  const { api } = useContext(Store);

  useEffect(() => {
    AOS.init({ duration: 1500 });
    const sliderfunc = () => {
      setSliderHandle(window.innerWidth);
    };
    window.addEventListener("resize", sliderfunc);
  }, []);

  const testSliderRef = useRef(null);

  // const SliderSetting = {
  //   dots: true,
  //   autoplay: true,
  //   autoplaySpeed: 3500,
  //   pauseOnFocus: true,
  //   pauseOnHover: true,
  //   centerMode: true,
  //   centerPadding: '50px',
  //   ref: testSliderRef,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         centerMode: false,
  //         centerPadding: '0',
  //       },
  //     },
  //   ],
  // };
  return (
    <Section data-aos="fade-up">
      <div className="header_main">
        <ReusableHeader
          hColor={Constant.Colors.seconderyColor}
          pColor={"#000000"}
          hText="Testimonial"
          pText="People say we are the best in the market. And we are always looking forward to maintain this decorem of ours."
        />
        <div className="slider_main">
          {/* <div className="button_container">
            {sliderHandle > 768 && <Button testSliderProp={testSliderRef} />}
          </div> */}
        </div>
      </div>
      <div className="testimonial_container">
        {/* <Slider className='testimonial_slider' {...SliderSetting}>
          {api?.testimonial.map(elem => (
            <SliderCard
              key={elem._id}
              username={elem.username}
              qualification={elem.qualification}
              Image={elem.image}
              comment={elem.comment}
              name={elem.username.slice(0, 5)}
            />
          ))}
        </Slider> */}
        {array.map((ele, i) => (
          <Main_Test_Container
            width={isOpen === i ? "100%" : "80px"}
            backgroundColor={isOpen === i ? null : Constant.Colors.mainColor}
            onClick={() => (sliderHandle > 768 ? demom(i) : demom())}
            key={ele}
          >
            <Testi_img_wrapper translate={isOpen === i ? "0" : "-110%"}>
              <img
                src="https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="testimonial image"
              />
            </Testi_img_wrapper>
            <TestWrapper translate={isOpen === i ? "0" : "-160%"}>
              <p className="test_info">
                I personally highly recommend 'Compix - VFX & Animation
                institute'. They are having the best team to train you to become
                a professional
              </p>
              <h1 className="test_title">Obaid Khan</h1>
              <p className="test_arts">3D Designer - Delhi NCR</p>
            </TestWrapper>
            <img
              src="https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="imgss"
            />
          </Main_Test_Container>
        ))}
      </div>
      <div className="footer_test_button">
        {/* {sliderHandle < 768 && <Button testSliderProp={testSliderRef} />} */}
      </div>
    </Section>
  );
};

export default Testimonial;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 7rem 10rem;
  background-color: ${Constant.Colors.lightBackgroundColor};

  .header_main {
    .slider_main {
      position: relative;
      .button_container {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }

  .testimonial_container {
    margin-top: 3rem;
    display: flex;
    gap: 1rem;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .footer_test_button {
    display: flex;
    justify-content: center;
    padding-top: 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;
    .testimonial_container {
      margin-top: 3rem;
    }
  }
`;

const TestWrapper = styled.div`
  transform: translateX(${(props) => props.translate});
  width: 70%;
  width: ${(props) => props.width};
  height: 90%;
  background-color: ${Constant.Colors.mainColor};
  pointer-events: none;
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.6rem;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  transition: ease-in-out 0.7s;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  .test_info {
    font-size: 1.6rem;
    color: #fff;
    text-align: center;
    line-height: 1.6;
    text-transform: capitalize;
    letter-spacing: 1.02px;
    @media only screen and (max-width: 400px) {
    font-size: 1.4rem;
    letter-spacing: 1.2px;
  }
  }
  .test_title {
    font-size: 2.5rem;
    color: ${Constant.Colors.seconderyColor};
    text-transform: uppercase;
  }

  .test_arts {
    font-size: 1.6rem;
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    transform: translateX(0);
  }
`;

const Testi_img_wrapper = styled.div`
  z-index: 6;
  width: 30%;
  transform: translateX(${(props) => props.translate});
  height: 100%;
  background-color: ${Constant.Colors.mainColor};
  /* background-color: #fff; */
  pointer-events: none;
  padding: 0.5rem;
  border-radius: 0.6rem;
  transition: ease-in-out 0.7s;
  background-color: #fff;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    height: auto;

  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.6rem;
    transition: all 0.7s;

    @media only screen and (max-width: 768px) {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
  }
  @media only screen and (max-width: 768px) {
    transform: translateX(0);
  }
`;

const Main_Test_Container = styled.div`
  border-radius: 0.6rem;
  /* flex: 1; */
  width: ${(props) => props.width};
  height: 400px;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  /* transition: cubic-bezier(0.71, 0.04, 0, 1.58) 1s; */
  transition: ease-in-out 0.7s;
  display: flex;
  align-items: center;
  overflow: hidden;
  gap: 0.2rem;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    background-color: transparent;
  }

  .imgss {
    width: 50px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
    margin: auto;
    position: absolute;
    bottom: 20px;
    left: 12px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;
