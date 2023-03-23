import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "../Nav/Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <nav className={styles.container}>
      <Link className={styles.link} to="/about">About</Link>
      <Link className={styles.link} to="/home">Home</Link>
      <Link className={styles.link} to="/favorites">Favorites</Link>
      <Link className={styles.link} to="/">Logout</Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
