import { Outlet, useNavigate } from "react-router";


const AdminLayout=()=>{
   const navigate = useNavigate();

  
    return(
          <div class="main-wrapper">
            <div class="col main-body">
              <Outlet />
            </div>
          </div>
    );
}
export default AdminLayout;