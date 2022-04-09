import { Routes, Route } from "react-router-dom";
import UsersPage from "../pages/allusers";
import NewUserPage from "../pages/newuser";
import NotFound from "../pages/not_found";


const PagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/users/create" element={<NewUserPage />} /> 
      <Route path="*" element={<NotFound />} />     
    </Routes>
  );
};

export default PagesRoutes;