import headerToken from "../api/headerToken";
import { baseUrl } from "./constants";

export const fetchTasksService = async (workspaceId) => {
  if (!workspaceId) {
    console.error("No workspace ID provided!");
    return { payload: [] };
  }

  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/tasks/workspace/${workspaceId}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
      {
        headers: header,
      }
    );

    const data = await res.json();
    // console.log("API Response:", data);
    return data;
  } catch (err) {
    console.error("API Fetch Error:", err);
    return { payload: [] };
  }
};
