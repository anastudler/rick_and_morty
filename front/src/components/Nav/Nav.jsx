import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "../Nav/Nav.module.css"

const Nav = ({ onSearch }) => {
  return (
    <nav className={styles.container}>
      <Link to="about">About</Link>
      <Link to="home">Home</Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
