import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPlanner from "./Planner/MyPlanner";
import Login from "./User/Login";
import Register from "./User/Register";
import ResetPassword from "./User/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 세션없을때는 로그인페이지로 리다이렉트 */}
        <Route path="/" element={<MyPlanner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
