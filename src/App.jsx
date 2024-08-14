import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HeaderComponent from "src/components/common/HeaderComponent";
import FooterComponent from "src/components/common/FooterComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
