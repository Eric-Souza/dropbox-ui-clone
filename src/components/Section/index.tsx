import React from 'react';

import { Container, Content, HeaderWrapper, Header, DropboxLogo } from './styles';

interface Props {
  variant: 'blue' | 'beige' | 'white' | 'black' 
  title: string
  description: string
}

const Section: React.FC <Props> = ({ variant, title, description}) => {
  const buttonVariant = Math.round(Math.random()) // Returns 0 or 1

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo />

            <span>Dropbox</span>
          </h1>

          <button>{buttonVariant === 0 ? 'Access' : 'Interact'}</button>
        </Header>
      </HeaderWrapper>

      <Content>
        <h2>{title}</h2>

        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;