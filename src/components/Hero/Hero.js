import React from "react";

import {Section, SectionText, SectionTitle} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Foto } from "./HeroStyles";

import { foto } from "../../constants/constants";
import { Img } from "../Projects/ProjectsStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Vitalii Boiko <br/>
        Portfolio Website
      </SectionTitle>

      {foto.map(({ id, image }) => (
        <Foto key={id}>
          <Img className="hero-foto" src={image} />
        </Foto>
      ))}
      <SectionText>

      Hello there, I'm Vitalii Front-end developer from Kyiv, Ukraine.<br/>
      I've been developing for a year, mostly work with JavaScript and such libraries as React , but the using of new languages or frameworks is not a problem. I like to develop web applications, that people enjoy using, and it also brings me additional motivation to move on.
      I give attention to the various little things to achieve the highest quality results. Ready to learn new ones and expand my current knowledge of the aforementioned as needed to the point where it makes me do my job faster, better and more efficiently.<br/>
      More detailed information you can get, by downloading my CV below.
             
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1rtOk1CcC_IewKWvO8eKn-YpPU-JrH7TF/view")
        }
      >
        Download CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
