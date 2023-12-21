import React from "react";
import styled from "styled-components";

const PageNotFound = () => {
  return (
    <Section>
      <img src="/assets/page-not-found.webp" alt="Page Not Found" />
    </Section>
  );
};

export default PageNotFound;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    object-fit: cover;
    /* width: 100%; */
  }

  @media only screen and (mix-width: 768px) {
    img {
    width: 100%;
  }
  }
`;
