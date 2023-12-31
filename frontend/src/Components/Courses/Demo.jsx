import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Constant } from "../../constant/index";

const Demo = () => {
  const array = [1, 2, 3];
  const [isOpen, setIsOpen] = useState(2);

  const demom = (i) => {
    setIsOpen((prevIndex) => (prevIndex === i ? null : i));
  };

  return (
    <Section>
      {array.map((ele, i) => (
        <div
          className={isOpen === i ? "byee" : "blue"}
          onClick={() => demom(i)}
          key={ele}
        >
          {ele}
        </div>
      ))}
    </Section>
  );
};

export default Demo;

const Section = styled.section`
  font-family: 1.6rem;
  height: 100vh;
  padding: 8rem;
  display: flex;
  gap: 1rem;

  .byee {
    width: 600px;
    height: 400px;
    background-color: #00ff0d;
    transition: ease-in-out 0.3s;
    border-radius: 1rem;
    cursor: pointer;
  }

  .blue {
    width: 80px;
    height: 400px;
    background-color: blue;
    transition: ease-in-out 0.3s;
    border-radius: 1rem;
    cursor: pointer;
  }
`;
