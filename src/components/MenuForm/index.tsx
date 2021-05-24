import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  function handleToggle () {
    if (window.toggleActiveMenu) window.toggleActiveMenu()
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />

          <span>Dropbox</span>
        </h1>

        <button className='action--close' onClick={handleToggle}>✕</button>
      </Navigation>

      <Form>
        <span className='title'>
          Log in
        </span>

        <span className='subtitle'>
          Please fill the form below
        </span>

        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Surname"></input>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>

        <button>
          Log in
        </button>

        <span className='terms'>
          Terms and conditions
        </span>
      </Form>
    </Container>
  );
}

export default MenuForm;