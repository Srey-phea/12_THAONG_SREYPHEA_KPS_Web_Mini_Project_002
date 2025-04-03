import Logo from "@/components/logo";
import React from "react";
import WorkspaceComponent from "./WorkspaceComponent";
import FavoriteComponent from "./FavoriteComponent";
import LogoutComponent from "./LogoutComponent";
import { fetchWorkspacesService, getFavoriteWorkspaces } from "@/app/service/workspace.service";

const SideBarComponent = async () => {
  const data = await fetchWorkspacesService();
  // const favData = await getFavoriteWorkspaces();
  return (
    <div className="bg-[#F8FAFC] h-[945px] py-25 ">
      <div className="px-45">
        <Logo />
      </div>
      <WorkspaceComponent workspaceList = {data}  />
      <FavoriteComponent/>
      <LogoutComponent/>
    </div>
  );
};

export default SideBarComponent;
