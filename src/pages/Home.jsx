import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page component</h1>
      <p>
        go to <Link to="/products">the list of products</Link>
      </p>
    </>
  );
};

export default Home;
