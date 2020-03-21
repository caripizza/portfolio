import React, { Suspense } from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { 
  Circle
  // FadingCircle
  // Wave
} from 'better-react-spinkit';
import './index.css';

render(
  <Suspense
    fallback={
      <Circle
        size={100}
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      />
    }
  >
    <App />
  </Suspense>,
  document.getElementById('root')
);
