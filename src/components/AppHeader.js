import React from "react";
import { USER_TOKEN } from "../config/localkeys";

const AppHeader = (props) => {

   const handelSignout = () => {
      localStorage.removeItem(USER_TOKEN);
      props.history.push("/?msg=logout successful");
   }
   return (
      <div className="container-full navbar">
         <button className="btn-logout"
            onClick={handelSignout}
         >Sign out</button>
      </div>
   )
}

export default AppHeader;

