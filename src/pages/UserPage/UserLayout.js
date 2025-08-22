import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";
import { AUTH_TOKEN } from "../../services/Auth";
import Header from "./Header";   // ✅ Import Header

const UserLayout = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const authToken = localStorage.getItem("AUTH_TOKEN");
  //   if (AUTH_TOKEN !== authToken) {
  //     navigate("/admin/Login");
  //   }
  // }, []);

  return (
    <div className="container">
      <Header />   
      <div className="main-wrapper">
        <div className="col main-body">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default UserLayout;
