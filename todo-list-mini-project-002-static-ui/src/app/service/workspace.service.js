
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





export const updateFavById = async (workspaceId, isFav) => {
  try{
    // http://96.9.81.187:8080/api/v1/workspace/3fe96c54-92d2-4c5f-b9be-dcbec05ab09c/favorite?favorite=true

    const res = await fetch(`${baseUrl}/workspace/${workspaceId}/favorite?favorite=${isFav}`,
      {
        method: "PATCH",
        headers: await headerToken(),
        body: JSON.stringify({
          workspaceId, 
          isFavorite: isFav,
        })
      }
    )
    console.log('first', res)
    const data = await res.json();
    return data;
  } 
  
  catch (error) {
        console.error("Error fetching favorite workspaces:", error);
      }
}


