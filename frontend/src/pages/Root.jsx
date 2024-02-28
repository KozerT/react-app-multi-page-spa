import MainNavigation from "../components/MainNavigation.jsx";
import { Outlet, useNavigation } from "react-router";

const RootLayout = () => {
  // const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
