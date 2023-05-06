import React from 'react';


import './App.css';
import styled from 'styled-components' ;
import { HomePage } from './app/containers/Homepage';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
`

function App() {
  return (
    <AppContainer className="App">
      <HomePage/>
    </AppContainer>
  );
}

export default App;
