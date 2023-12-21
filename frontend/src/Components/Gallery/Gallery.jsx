import React, { useContext } from "react";
import styled from "styled-components";
import { Constant } from "../../constant";
import ReusableHeader from "../Reusable/ReusableHeader";
import ImageGalleryRes from "./ImageGallery";

const ImageGallery = () => {
  return (
    <Section id="gallery">
      <ReusableHeader
        hText="Gallery"
        pText={
          "With clean enviornment and expert faculty, we create professionals for tomorrow."
        }
        hColor={"#fff"}
        pColor="#fff"
      />
      <ImageGalleryRes />
    </Section>
  );
};

export default ImageGallery;

const Section = styled.section`
  font-family: ${Constant.Fonts.primaryFont};
  height: auto;
  padding: 7rem 10rem;
  background-color: ${Constant.Colors.mainColor};

  .gallery_container {
    padding-top: 3rem;
    padding-right: 0;
    overflow: hidden;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;
  }
`;
