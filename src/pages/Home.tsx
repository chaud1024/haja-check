import Button from "@components/shared/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>하자! 체크</h1>
      <Link to="/list">
        <Button title="시작하기" />
      </Link>
    </div>
  );
};

export default Home;
