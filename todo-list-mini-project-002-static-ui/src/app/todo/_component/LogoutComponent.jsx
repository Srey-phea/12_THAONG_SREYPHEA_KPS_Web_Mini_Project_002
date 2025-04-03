"use client"; // Mark this as a Client Component

import { logout } from "@/app/action/logoutAction";
import React from "react";
// import { logout } from "../actions/logout"; // Adjust the path to your logout action

const LogoutComponent = () => {
  // Handle logout by invoking the server action
  const handleLogout = async () => {
    await logout(); // Call the server action
  };

  return (
    <div className="flex gap-5 px-15 mt-30">
      <img
        src="logout.svg"
        alt="Logout"
        onClick={handleLogout}
        className="cursor-pointer"
      />
      <h1 className="text-xl cursor-pointer" onClick={handleLogout}>
        Logout
      </h1>
    </div>
  );
};

export default LogoutComponent;