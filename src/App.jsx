import { Routes, Route } from "react-router-dom";
import LalaWebsite from "./components/LalaWebsite";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LalaWebsite/>}/>
            <Route path="/:slug" element={<LalaWebsite/>}/>
        </Routes>
    );
}

export default App;
