import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Constant } from "../../constant";
import { useLocation } from "react-router-dom";

function QuizResult() {
  const location = useLocation();
  const [filterAnswer, setFilterAnswer] = useState([]);
  const { fullName, email, createdAt, answers, answerKey, course } =
    location.state.data;

  const finalAnswer = () => {
    const result = answers?.filter((ans, i) => {
      return ans === answerKey[i].answer;
    });
    setFilterAnswer(result);
  };

  useEffect(() => {
    finalAnswer();
  }, []);
  return (
    <Section>
      <div className="result_container">
        <h1 className="header_title">Result</h1>
        <div className="userDetails_wrapper">
          <h3>Name : {fullName?.toUpperCase()}</h3>
          <h3>Course : {course.toUpperCase()}</h3>
          <h3>Date : {createdAt?.slice(0, 10)}</h3>
          <h3>Email : {email}</h3>
          <h3>Status : {filterAnswer?.length >= 3 ? "Pass" : "Fail"}</h3>
          <h3>Total Question : {answerKey?.length}</h3>
          <h3>Your Score : {filterAnswer?.length}</h3>
        </div>
        <div className="question_wrapper">
          <div className="all_questions">
            <h3>Your Answers</h3>
            <ul>
              {answers?.map((ele, i) => (
                <div key={i}>
                  <li className="qus">
                    Q{i + 1}. {answerKey[i].question}
                  </li>
                  <li className="ans">
                    Ans. {ele === null || undefined ? "Not Given" : ele}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="question_wrapper">
          <div className="all_questions">
            <h3>Total Questions</h3>
            <ul>
              {answerKey?.map((ele, i) => (
                <div key={i}>
                  <li className="qus">
                    Q{i + 1}. {ele.question}
                  </li>
                  <li className="ans">Correct Answer : {ele.answer}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default QuizResult;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  font-size: 1.6rem;
  padding: 1.6rem;

  .result_container {
    padding: 1rem;
    border-left: 1rem solid ${Constant.Colors.mainColor};
    border-right: 1rem solid ${Constant.Colors.mainColor};
    border-radius: 0.4rem;
    width: 100%;
    height: auto;
    background-color: #fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    .header_title {
      text-align: center;
      padding: 1rem 0;
      font-size: 3rem;
    }

    .userDetails_wrapper {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-bottom: 0.2rem solid ${Constant.Colors.mainColor};
      padding-bottom: 1rem;

      h3 {
        color: ${Constant.Colors.mainColor};
      }
    }

    .question_wrapper {
      h3 {
        margin: 1rem 0;
      }
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: ${Constant.Colors.mainColor};
        background-color: #fff;
        padding: 1rem;
        border-radius: 0.3rem;
        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
          rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
        div {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          li:last-child {
            font-weight: bold;
          }
        }
      }
    }
  }
`;
