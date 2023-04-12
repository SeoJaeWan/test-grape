import { BrowserRouter, Route, Routes } from "react-router-dom";
import Animation from "../lib/AnimationReact";
import Cafe from "../lib/cafe24";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cafe />} />
        <Route path="/animation" element={<Animation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
