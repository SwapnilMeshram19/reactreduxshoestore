import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div data-testid="navbar" style={{display:"flex",justifyContent:"space-between", padding:"10px 40px"}}>
      <div data-testid="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <button data-testid="navbar-login-button" onClick={()=>navigate('/login')}>LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
