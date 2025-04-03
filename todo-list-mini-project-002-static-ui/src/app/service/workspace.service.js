import headerToken from "../api/headerToken";
import { baseUrl } from "./constants";

export const fetchWorkspacesService = async () => {

  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
      {
        headers: header,
      }
    );

    const data = await res.json();
    // console.log(" API Response in Service:", data); 
    return data; 
  } catch (err) {
    console.log(" API Fetch Error:", err);
    return { payload: [] }; 
  }
};


export const getFavoriteWorkspaces = async () => {
  try {
    const res = await fetch(`${baseUrl}/workspace/${workspaceId}/favorite?favorite=true`);
    // if (!response.ok) {
    //   throw new Error(`Error: ${response.status} ${response.statusText}`);
    // }
    const data = await res.json();
    // console.log('jhfbefijb', data)
    return data;
  } catch (error) {
    console.error("Error fetching favorite workspaces:", error);
    return [];
  }
};



