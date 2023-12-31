import React, { useRef } from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { Constant } from "../../constant";

const CourseModex = ({
  label: { title, img, courseDetails, courseDuration, courseSkills, software },
  ModelHandlerFunc,
}) => {
  return (
    <Section>
      <div
        className="main_wrapper_course"
        onClick={(e) => {
          if (e.target.classList[0] === "main_wrapper_course") {
            ModelHandlerFunc();
          }
        }}
      >
        <div className="course_model_container">
          {/*Course Header */}
          <div className="course_header_wrapper">
            <div className="course_title">
              <h3>{title}</h3>
            </div>
            <div className="close_wrapper">
              <AiFillCloseCircle onClick={ModelHandlerFunc} />
            </div>
          </div>
          {/*Course Image  */}
          <div className="course_image_wrapper">
            <img src={img} alt="Image not Found" loading="lazy" />
          </div>
          {/* Course Content */}
          <div className="course_content_wrapper">
            <div className="course_content">
              {courseDetails.map((elem, i) => (
                <>
                  <p id={i}>{elem}</p>
                </>
              ))}
            </div>
            <div className="coure_duration">
              <div className="duration">
                <h2>Course Duration</h2>
                <p>{courseDuration}</p>
              </div>
              <div className="skills">
                <h2>Skills</h2>
                <ul>
                  {courseSkills.map((elem, i) => (
                    <li id={i}>{elem}</li>
                  ))}
                </ul>
              </div>
              <div className="softwre">
                <h2>Softwares to be taught </h2>
                <ul>
                  {software.map((elem, i) => (
                    <li id={i} key={i}>{elem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CourseModex;

const Section = styled.section`
  > div {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00000019;
    backdrop-filter: blur(5px);
    z-index: 9622656565465656565;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${Constant.Fonts.primaryFont};
    -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @-webkit-keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  .course_model_container {
    width: 80%;
    height: 90%;
    background-color: #fff;
    padding: 10px;
    border-radius: 4px;

    .course_header_wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 2rem;
      /* padding: 0 0 20px 0; */
      height: 8%;

      .course_title {
        color: ${Constant.Colors.seconderyColor};
        font-size: 3rem;
        text-transform: uppercase;
      }

      .close_wrapper {
        svg {
          color: ${Constant.Colors.seconderyColor};
          cursor: pointer;
          font-size: 3rem;
          margin-top: 10px;
        }
      }
    }

    .course_image_wrapper {
      width: 100%;
      height: 45%;
      padding: 10px 0;

      img {
        width: 100%;
        /* aspect-ratio: 2; */
        height: 100%;
        border-radius: 4px;
        /* object-fit: cover; */

        @media only screen and (max-width:768px) {
          /* width: 100%; */
          /* aspect-ratio: 2; */
          object-fit: cover;
        }
      }
    }

    .course_content_wrapper {
      height: 47%;
      display: flex;
      overflow-y: scroll;

      .course_content {
        width: 75%;
        padding: 10px 50px 0 10px;
        p {
          margin-bottom: 18px;
          text-align: justify;
          font-size: 1.8rem;
          color: #444444;
        }
      }

      .coure_duration {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 1.6rem;

        h2 {
          margin-bottom: 6px;
          color: ${Constant.Colors.seconderyColor};
        }

        ul {
          list-style: none;
          color: #444444;

          li {
            margin-bottom: 6px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .course_title {
      font-size: 2rem !important;
    }

    .course_model_container {
      width: 95%;
    }

    .course_content_wrapper {
      flex-direction: column;
    }

    .course_content {
      width: 100% !important;
      padding: 10px !important;
      p {
        font-size: 1.4rem !important;
      }
    }

    .coure_duration {
      width: 100% !important;
    }
  }

  @media only screen and (max-width: 400px) {
    .course_title {
      font-size: 1.6rem !important;
    }
  }
`;
