import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import LalaWebsite from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <LalaWebsite/>
    </StrictMode>
);
