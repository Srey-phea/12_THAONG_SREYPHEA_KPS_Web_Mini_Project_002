import { baseUrl } from "./constants";

export const loginService = async (user) => {
  try {
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};