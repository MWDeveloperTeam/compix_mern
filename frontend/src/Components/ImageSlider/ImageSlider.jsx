import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Constant } from "../../constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Link as ScrollLink } from "react-scroll";
import { LeftButton } from "./Buttons";
import { Store } from "../../StateStore";

const ImageSlider = () => {
  const api = useContext(Store);
  const sliderRef = useRef(null);
  return (
    <div className="image_slider_container" id="home">
      <Slider infinite autoplay autoplaySpeed={2000} ref={sliderRef}>
        {api?.api?.imglinks?.map((img) => (
          <div className="img_container" key={img._id} data-tilt>
            <img src={img?.links} alt={img.title} />
          </div>
        ))}
      </Slider>
      <HeroText>
        <div className="content_container">
          <h1>
            A Gamut Of <span>Opportunities</span>
          </h1>
          <p>Kashmir's first premiere multimedia Institute</p>
          <ul>
            {api[0]?.coursename?.map((course) => (
              <li key={course._id}>{course.list}</li>
            ))}
          </ul>
          <button>
            <ScrollLink to="courses" smooth={true} duration={1300}>
              Start Now
            </ScrollLink>
          </button>
        </div>
        <LeftButton sliderFunc={sliderRef} />
      </HeroText>
    </div>
  );
};

export default ImageSlider;

const HeroText = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.45);
  top: 0;
  pointer-events: none;
  color: maroon;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${Constant.Fonts.primaryFont};

  .content_container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h1 {
      color: #fff;
      font-size: 5rem;
      /* text-transform: uppercase; */
      letter-spacing: 0.1rem;
      span {
        color: ${Constant.Colors.seconderyColor};
      }
    }

    p {
      font-size: 2.2rem;
      color: #fff;
      letter-spacing: 0.1rem;
      text-transform: capitalize;
    }

    ul {
      list-style: none;
      display: flex;
      gap: 1rem;
      font-size: 2rem;
      text-transform: capitalize;
      li {
        color: ${Constant.Colors.seconderyColor};
        letter-spacing: 0.1rem;
        :first-child {
          text-transform: uppercase;
        }

        ::after {
          content: "|";
          color: #fff;
          margin-left: 0.5rem;
        }
        :last-child::after {
          content: "";
        }
      }
    }

    button {
      margin-top: 1.5rem;
      pointer-events: initial;
      font-size: 2rem;
      /* padding: 1rem 2.5rem; */
      border: none;
      border-radius: 100rem;
      background-color: transparent;
      /* background-color: red; */
      opacity: 1;
      color: #fff;
      cursor: pointer;

      a {
        display: block;
        width: 100%;
        height: 100%;
        background-color: ${Constant.Colors.seconderyColor};
        padding: 1rem 2.5rem;
        border-radius: 100rem;
        transition: ease-in-out 0.3s;
        &:hover {
          background-color: ${Constant.Colors.mainColor};
          color: #fff;
          transform: translateY(-0.8rem);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .content_container {
      h1 {
        font-size: 3rem;
      }

      p {
        font-size: 2rem;
      }

      ul {
        font-size: 1.5rem;
      }

      button {
        margin-top: 0.5rem;
        padding: 0.8rem 2rem;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .content_container {
      /* background-color: red; */
      h1 {
        font-size: 2.3rem;
      }

      p {
        font-size: 1.4rem;
      }

      ul {
        font-size: 1.45rem;
      }

      button {
        margin-top: 0.5rem;
        padding: 0.8rem 2rem;
      }
    }
  }

  @media only screen and (max-width: 350px) {
    .content_container {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1.2rem;
      }

      ul {
        font-size: 1.2rem;
      }

      button {
        margin-top: 0.5rem;
        padding: 0.8rem 2rem;
      }
    }
  }
`;
