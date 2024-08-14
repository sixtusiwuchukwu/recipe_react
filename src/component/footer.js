import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterList>
        <FooterListItem><FooterLink href="#">Home</FooterLink></FooterListItem>
        <FooterListItem><FooterLink href="#">About Us</FooterLink></FooterListItem>
        <FooterListItem><FooterLink href="#">Contact</FooterLink></FooterListItem>
        <FooterListItem><FooterLink href="#">Privacy Policy</FooterLink></FooterListItem>
      </FooterList>
      <p>&copy; 2024 Flux-Recipe</p>
    </FooterContainer>
  );
};

export default Footer;



 const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;
`;

export const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const FooterListItem = styled.li`
  margin: 0 10px;
`;

export const FooterLink = styled.a`
  color: #F8CC36;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
