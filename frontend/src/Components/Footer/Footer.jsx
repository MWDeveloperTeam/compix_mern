import React from "react";
import styled from "styled-components";
import { BsFacebook, BsInstagram,  } from "react-icons/bs";
import { AiFillYoutube, AiFillLinkedin  } from "react-icons/ai";
import { Constant } from "../../constant/index";

const Footer = () => {
  return (
    <Section>
      <p>&copy; {new Date().getFullYear()} Visual Art Age India.</p>
      <div className="footer_icons">
        <BsFacebook />
        <BsInstagram />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
    </Section>
  );
};

export default Footer;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  padding: 4rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Constant.Colors.mainColor};
  p {
    font-size: 1.6rem;
    color: #f4f2f7;
  }

  .footer_icons {
      display: flex;
      gap: 2rem;
      
      svg {
          font-size: 3rem;
          color: #f4f2f7;
          transition: ease-in-out .3s;
          cursor: pointer;
          padding: .6rem;
          border-radius: 50%;

          &:hover {
              color: ${Constant.Colors.mainColor};
              background-color: ${Constant.Colors.seconderyColor};
          }
      }
  }

  @media only screen and (max-width: 768px){
  padding: 3rem;
  display: flex;
  p {
    font-size: 1.3rem;
  }
  }

  @media only screen and (max-width: 430px){
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;     
  }
`;
