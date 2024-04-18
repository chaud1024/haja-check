import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "@components/shared/NavBar";
import Home from "@pages/Home";
import House from "@pages/House";
import Layout from "@pages/Layout";
import Login from "@pages/Login";
import MyPage from "@pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house" element={<House />} />
        <Route path="/list" element={<Layout />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
