import React from 'react';
import { DiAndroid, DiReact, DiChrome } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillsStyles';

const Skills = () =>  (
  <Section id="skills">
    <SectionDivider />
    <br/>
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      JavaScript, React, Redux, HTML5, CSS3, Sass (SCSS), BEM, Git, GitHub, jQuery, Bootstrap, Ajax, Fetch, Axios, Handlebars, Express, Webpack, Photoshop, Figma, Trello|Jira.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End Development</ListTitle>
          <ListParagraph>
            I love to visualize the tasks assigned to me and also give them dynamics, so that everything around seems to come to life.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiChrome size="3rem"/>
        <ListContainer>
          <ListTitle>Web Design</ListTitle>
          <ListParagraph>
            I think over the design of websites and applications created by me myself and try to make them as responsive and interactive as possible.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size="3rem"/>
        <ListContainer>
          <ListTitle>Mobile Application</ListTitle>
          <ListParagraph>
          One of my strongest interests and hobbies is mobile development. I love developing mobile applications that will be useful to people.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Skills;
