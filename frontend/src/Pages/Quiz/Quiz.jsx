import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { Constant } from "../../constant/index";
import "./quizcss.css";
import { AllQuizData } from "./Data/QuizData";
import Timer from "./Timer";
import axios from "axios";
import { useExamPost } from "../../lib/useFunctions/useFunctions";
import { URL } from "../../RoutesUrl/URL";
import { warningAlert } from "../../Components/Alerts/Alerts";

function Quiz() {
  const { examTest, userName, students, uniqueRandomData } =
    useLocation().state;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(60);
  const [total, setTottal] = useState(14);
  const [totalLength, setTotalLength] = useState(AllQuizData[examTest]?.length);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  const changeQuestion = (e) => {
    setTotalLength(totalLength - 1);

    if (currentQuestion < AllQuizData[examTest].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    setTotalLength(totalLength + 1);
  };

  const answerHandler = (option) => {
    let newArray = [...answers];
    newArray[currentQuestion] = option;
    setAnswers(newArray);
  };

  const submit = async () => {
    const exData = await useExamPost("http://localhost:8000/api/v1/exam", {
      fullName:
        students[0]?.firstName +
        " " +
        students[0]?.middleName +
        " " +
        students[0]?.lastName,
      email: students[0]?.email,
      course: examTest,
      stdId: students[0]?._id,
      answers,
      answerKey: uniqueRandomData,
    });
    navigate(URL.Result, {
      state: { data: exData?.data?.data },
    });
  };

  const submitHandler = () => {
    // if ((timer, total === 0)) {
    //   submit();
    //   return;
    // } else

    if (window.confirm("Do you want to submit")) {
      submit();
      return;
    }
  };

  if ((timer === 0) & (total === 0)) {
    warningAlert("timeout exam submitted");
    submit();
  }
  return (
    <Section>
      <div className="container">
        <div className="quiz_header_wrapper">
          <p className="heading-txt">
            {currentQuestion + 1}/{uniqueRandomData.length}
          </p>
          {!showResult ? (
            <>
              <Timer
                timer={timer}
                setTimer={setTimer}
                total={total}
                setTottal={setTottal}
                setShowResult={setShowResult}
              />
            </>
          ) : null}
        </div>
        {
          <>
            <div className="question">
              <span id="question-number">Q{currentQuestion + 1}. </span>
              <span id="question-txt">
                {uniqueRandomData[currentQuestion]?.question}
              </span>
            </div>
            <div className="option-container">
              {uniqueRandomData[currentQuestion]?.options?.map((option, i) => {
                return (
                  <button
                    // className="option-btn"
                    className={`option-btn ${
                      answers.includes(option) ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => answerHandler(option)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <div className="next_button_wrapper">
              {currentQuestion > 0 ? (
                <input
                  type="button"
                  value="Previous"
                  id="next-button"
                  onClick={previousQuestion}
                />
              ) : null}

              {currentQuestion === uniqueRandomData.length - 1 ? (
                <input
                  type="button"
                  value="Submit"
                  id="next-button"
                  onClick={submitHandler}
                />
              ) : (
                <input
                  type="button"
                  value="Next"
                  id="next-button"
                  onClick={changeQuestion}
                />
              )}
            </div>
          </>
        }
      </div>
    </Section>
  );
}

export default Quiz;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20;
  gap: 20;
  height: 100vh;
  padding: 1rem;
  /* 
  @media only screen and (max-width: 768px) {
    align-items: initial;
  } */
`;
