import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.scss";

import LalaWebsite from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <LalaWebsite/>
    </StrictMode>
);
