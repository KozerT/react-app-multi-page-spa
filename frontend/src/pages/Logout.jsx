import { redirect } from "react-router";

export const action = () => {
  localStorage.removeItem("token");
  return redirect("/");
};
