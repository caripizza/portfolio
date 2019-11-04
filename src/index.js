import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/app/App';
import { 
  Circle
  // FadingCircle
  // Wave
} from 'better-react-spinkit';
import './index.css';

render(
  <Provider store={store}>
    <Suspense
      fallback={
        <Circle
        // <FadingCircle
        // <Wave
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
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
