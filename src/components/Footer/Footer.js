import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillPhone, AiFillMail, AiFillMessage } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle><AiFillPhone size="2rem" /> Phone</LinkTitle>
          <LinkItem href="tel:+38(097)100-33-69">+38(097)100-33-69</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle> <AiFillMail size="2rem" /> Email</LinkTitle>
          <LinkItem href="mailto:vitali90@ukr.net">vitali90@ukr.net</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle> <AiFillMessage size="2rem" /> Telegram</LinkTitle>
          <LinkItem href="Telegram:@vitaly_boiko">@vitaly_boiko</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Time is just an illusion</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/b-vitalii">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/vitalii-boiko-149860b0/?locale=en_US">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/vitalii_boyko/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
