import React from "react";
import ReactDOM from "react-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import "./scss/home.scss";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

window.addEventListener('load', () => {
    if (navigator.standalone) {
        console.log('Launched: Installed (iOS)');
    } else if (matchMedia('(display-mode: standalone)').matches) {
        console.log('Launched: Installed');
    } else {
        console.log('Launched: Browser Tab');
    }
});
window.addEventListener('appinstalled', (evt) => {
    console.log('a2hs installed');
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

serviceWorker.register();