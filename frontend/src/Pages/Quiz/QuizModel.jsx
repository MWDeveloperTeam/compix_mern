import React, { useState, useEffect } from "react";
import {
  succssAlert,
  errorAlert,
  warningAlert,
} from "../../Components/Alerts/Alerts";
import QuestionImg from "../../Media/questionsImg.svg";
import styled from "styled-components";
import { AllQuizData } from "./Data/QuizData";
import { Constant } from "../../constant/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "../../RoutesUrl/URL";
import { useExamGet, usePatch } from "../../lib/useFunctions/useFunctions";

const QuizModel = () => {
  const [students, setStudents] = useState([]);
  const [filterStd, setFilterStd] = useState([]);
  const [examStudent, setExamStudents] = useState([]);
  const [userName, SetUserName] = useState("");
  const [examTest, SetExamTest] = useState("");
  const navigate = useNavigate();

  // =================================================================

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function getUniqueRandomData(originalArray = [], count) {
    const shuffledArray = shuffleArray([...originalArray]);
    const uniqueRandomData = new Set();

    for (let i = 0; i < Math.min(count, shuffledArray.length); i++) {
      uniqueRandomData.add(shuffledArray[i]);
    }

    return Array.from(uniqueRandomData);
  }

  const numberOfUniqueElements = 10;

  const uniqueRandomData = getUniqueRandomData(
    AllQuizData[examTest],
    numberOfUniqueElements
  );

  // =================================================================

  const takeTest = async (e) => {
    e.preventDefault();

    if (
      students[0]?.email?.includes(userName) &&
      students[0]?.examCourse?.includes(examTest)
    ) {
      succssAlert(students[0]?.email);
      usePatch(`http://localhost:8000/api/v1/students/${students[0]?._id}`, {
        examCourse: "",
      });

      await axios.post("http://localhost:8000/api/v1/examTaken", {
        id: students[0]?._id,
        course: examTest,
      });
      navigate(URL.Quiz, {
        state: {
          userName,
          examTest,
          students,
          uniqueRandomData,
        },
      });
      return;
    }
    if (students[0]?.examTaken?.includes(examTest)) {
      warningAlert("Exam Already Taken");
      navigate(URL.Result, {
        state: { data: examStudent[0] },
      });
      return;
    } else {
      errorAlert("You are not valid user");
      return;
    }
  };

  useEffect(() => {
    const getStudents = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/students");
        const user = res.data.data.filter((ele) => {
          return ele.email === userName;
        });
        setStudents(user);
        // const data = res.data.data.map((std) => {
        //   return { email: std.email, course: std.examCourse };
        // });
        // setFilterStd([data[0].course, data[0].email]);
      } catch (error) {
        console.log(error);
      }
    };

    const getExamData = async () => {
      const examRes = await useExamGet("http://localhost:8000/api/v1/exam");
      const result = examRes.data.data.filter((ele) => {
        return ele.email === userName && ele.course === examTest;
      });
      setExamStudents(result);
      console.log(result);
    };

    getStudents();
    getExamData();
  }, [userName, examTest]);
  return (
    <Section>
      <div className="quiz_left_container">
        <h1>Enter Your Details</h1>
        <div className="quiz_input_container">
          <form onSubmit={takeTest}>
            <div className="quiz_input_wrapper">
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) => SetUserName(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="quiz_input_wrapper">
              <label htmlFor="course_option">Select Course</label>
              <select
                name="course_option"
                id="course_option"
                onChange={(e) => SetExamTest(e.target.value)}
              >
                <option value="Choose">Choose</option>
                <option value="photoshop">Photoshop</option>
                <option value="html">HTML</option>
                <option value="word">Micorsoft Word</option>
                <option value="css">CSS</option>
              </select>
            </div>

            <div className="quiz_input_wrapper">
              <button>Take Test</button>
            </div>
          </form>
        </div>
      </div>
      <div className="quiz_right_container">
        <img src={QuestionImg} alt="Quiz Image" />
      </div>
    </Section>
  );
};

export default QuizModel;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100vh;
  padding: 3rem;
  /* background-color: #875410; */
  .quiz_left_container {
    display: flex;
    flex-direction: column;
    min-width: 35rem;
    width: 40%;
    align-items: center;
    justify-content: center;
    /* background-color: maroon; */
    h1 {
      font-size: 3rem;
      color: ${Constant.Colors.mainColor};
    }
    .quiz_input_container {
      width: 100%;
      .quiz_input_wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        label {
          font-size: 1.6rem;
          margin-top: 1rem;
        }
        input,
        select {
          display: block;
          padding: 1.5rem;
          outline: none;
          border: 0.1rem solid ${Constant.Colors.mainColor};
          border-radius: 0.3rem;
          transition: ease-in-out 0.3s;
          &:focus {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
              rgba(0, 0, 0, 0.23) 0px 3px 6px;
          }
        }

        button {
          display: block;
          padding: 1.5rem;
          outline: none;
          margin-top: 2rem;
          background-color: ${Constant.Colors.mainColor};
          border: none;
          border-radius: 0.3rem;
          color: #fff;
          text-transform: uppercase;
          cursor: pointer;
          transition: ease-in-out 0.3s;
          font-weight: bold;
          letter-spacing: 0.12rem;
          &:hover {
            color: ${Constant.Colors.mainColor};
            background-color: ${Constant.Colors.seconderyColor};
          }
        }
      }
    }
  }

  .quiz_right_container {
    /* width: 50%; */
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;

    .quiz_left_container {
      width: 100%;
      min-width: 20rem;
    }
  }
`;
