import MainNavigation from "../components/MainNavigation.jsx";
import { Outlet } from "react-router";

const RootLayout = () => {
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