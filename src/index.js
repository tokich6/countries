import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { config } from "./styles/theme";



ReactDOM.render(
  <StrictMode>
    <ColorModeScript initialColorMode={config.initialColorMode}/>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
