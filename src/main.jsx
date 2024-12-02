import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.scss";

import LalaWebsite from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <BrowserRouter>
            <LalaWebsite/>
        </BrowserRouter>
    </StrictMode>
);
