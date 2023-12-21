import React from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { Constant } from "../../constant";
import please_login_SVG from "../../Media/Login-amico.svg";
import { URL } from "../../RoutesUrl/URL";

const PleaseLogin = () => {
  const navigate = useNavigate();
  return (
    <Section>
      <img src={please_login_SVG} alt="" />
      <button
        onClick={() => {
          navigate(URL.Login);
        }}
      >
        Please Login
      </button>
    </Section>
  );
};

export default PleaseLogin;

const Section = styled.section`
  width: 100%;
  max-width: 1024px;
  margin: auto;
  height: 100vh;
  font-family: ${Constant.Fonts.primaryFont};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 2rem;

  img {
    max-width: 500px;
    width: 100%;
  }

  button {
    padding: 15px 20px;
    border-radius: 4px;
    border: none;
    background-color: ${Constant.Colors.primaryColorLight};
    color: #fff;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: ease-in-out 0.3s;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      background-color: ${Constant.Colors.seconderyColorLight};
      transform: translateY(4px);
      color: #000;
    }
  }
`;
