import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPlanner from "./Planner/MyPlanner";
import Login from "./User/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 세션없을때는 로그인페이지로 리다이렉트 */}
        <Route path="/" element={<MyPlanner />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
