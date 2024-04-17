import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "@components/shared/NavBar";
import Home from "@pages/Home";
import Layout from "@pages/Layout";
import MyPage from "@pages/MyPage";
import ModalLogin from "./components/Modal/ModalLogin";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<Layout />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <ModalLogin />
    </BrowserRouter>
  );
}

export default App;
