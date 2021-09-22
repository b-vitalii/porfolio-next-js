import React from 'react';

import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './BenefitsStyles';

const data = [
  { number: 15, text: 'Projects in Front-end development.'},
  { number: 8, text: 'Years background in aviation and analytics.', },
  { number: 5, text: 'Large projects in aviation industry.', },
  { number: 2, text: `Years as an instructor in aircraft landing gear maintenance.`, },
  { number: 2, text: `Years as an instructor training for fitness trainers.`, },
  { number: 'PL', text: 'Powerlifting champion of Ukraine (IPF), Master of Sport.', },
  { number: 'Music', text: `I'm learn to play the piano.`, },
  { number: 'Cinema', text: `The main genre of my favorite films is drama.`, },
];

const Benefits = () => (
  <Section id="benefits">
    <SectionDivider />
    <br/>
    <SectionTitle>
      Benefits & Hobbies
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Benefits;
