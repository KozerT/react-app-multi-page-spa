import { useEffect } from "react";
import MainNavigation from "../components/MainNavigation.jsx";
import { Outlet, useLoaderData } from "react-router";
import { useSubmit } from "react-router-dom";

const RootLayout = () => {
  const token = useLoaderData();
  const submit = useSubmit;
  useEffect(() => {
    if (!token) {
      return;
    }

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, 1 * 60 * 60 * 1000);
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
