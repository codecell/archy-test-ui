import { Routes, Route } from "react-router-dom";
import UsersPage from "../pages/allusers";
import NewUserPage from "../pages/newuser"



const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/users/create" element={<NewUserPage />} />      
    </Routes>
  );
};

export default PagesRoutes;