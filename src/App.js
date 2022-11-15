import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Hamburger from "./components/Hamburger";
import MainPage from "./pages/MainPage";
import Silver from "./pages/SilverPage";
import Gold from "./pages/GoldPage";
import Platinum from "./pages/PlatinumPage";


function App() {
  return (
    <BrowserRouter>
      <Hamburger />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/silver" element={<Silver />}></Route>
          <Route path="/platinum" element={<Platinum />}></Route>
          <Route path="/gold" element={<Gold />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
