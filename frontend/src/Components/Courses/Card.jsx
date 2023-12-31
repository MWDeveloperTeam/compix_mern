import React, { useState } from "react";
import { Constant } from "../../constant";
import Tilt from "react-parallax-tilt";
import { Section } from "./Style";

const Card = ({
  curElem: { icon, title, label },
  ModelHandlerFunc,
  curElem,
}) => {
  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor={Constant.Colors.seconderyColor} glarePosition="top" >
      <div>
        <Section>
          <div className="icon_container">
            <i className={icon}></i>
          </div>
          <div className="title_container">
            <h1>{title}</h1>
          </div>
          <div className="label_container">
            <p>{label.slice(0, 90)}...</p>
          </div>
          <div className="button_container">
            <button onClick={() => ModelHandlerFunc(curElem)}>Read More</button>
          </div>
        </Section>
      </div>
    </Tilt>
  );
};

export default Card;
