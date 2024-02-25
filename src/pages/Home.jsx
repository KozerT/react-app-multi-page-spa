import { Link, useNavigate } from "react-router-dom";





const Home = () => {

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/products');
  }
  return (
    <>
      <h1>Home Page component</h1>
      <p>
        <button onClick={navigateHandler}></button>
      </p>
    </>
  );
};

export default Home;
