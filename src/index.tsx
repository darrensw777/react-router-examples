import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { sendToVercelAnalytics } from "./vitals";
import { BrowserRouter } from "react-router";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root"),
);

reportWebVitals(sendToVercelAnalytics);

// import { createRoot } from "react-dom/client";

// import App from "./App";

// createRoot(document.getElementById("root")!).render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
// );
