import headerToken from "../api/headerToken";
import { baseUrl } from "./constants";


export const userInformationService = async () => {
  try {
    const headers = await headerToken(); 

    const res = await fetch(`${baseUrl}/user`, {
      headers: headers,
    });

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();
    // console.log("API Response Data:", data);
    return data;
  } catch (e) {
    console.error("API Fetch Error:", e);
    return { payload: [] };
  }
};
