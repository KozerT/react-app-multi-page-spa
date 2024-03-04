import { useEffect } from "react";
import MainNavigation from "../components/MainNavigation.jsx";
import { Outlet, useLoaderData } from "react-router";
import { useSubmit } from "react-router-dom";
import { getTokenDuration } from "../util/auth.js";

const RootLayout = () => {
  const token = useLoaderData();
  const submit = useSubmit;
  useEffect(() => {
    if (!token) {
      return;
    }

    const tokenDuration = getTokenDuration();

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
