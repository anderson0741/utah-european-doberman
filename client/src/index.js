import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import { ParallaxProvider } from 'react-scroll-parallax';

import App from './App';

ReactDOM.render(
    <ParallaxProvider>
        <Provider store={store}>
            <BrowserRouter>
            <App />
        </BrowserRouter>
        </Provider>
    </ParallaxProvider>
    , document.getElementById('root'));
