import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { AUTH_TOKEN } from "../../services/Auth";
import { Sidebar } from "lucide-react";

const AdminLayout=()=>{
   const navigate = useNavigate();
//   useEffect(() => {
//     const authToken = localStorage.getItem('AUTH_TOKEN');
//     if( AUTH_TOKEN !== authToken) {
//       navigate('/admin/Login');
//     }
//   }, []);
  
    return(
        <div class="container">
          {/* <Header /> */}
          <div class="main-wrapper">
            <Sidebar />
            <div class="col main-body">
              <Outlet />
            </div>
          </div>
          {/* <Footer /> */}
        </div>
    );
}
export default AdminLayout;