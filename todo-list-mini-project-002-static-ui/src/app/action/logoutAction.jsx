"use server"; // Mark this file as a Server Action

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete("session"); // Delete the session cookie
  redirect("/login"); // Redirect to the login page
}