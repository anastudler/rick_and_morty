import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";

 function Card({ name, species, gender, image, onClose, id }) {
  return (
    <div className={styles.card}>
      <button onClick={onClose} className={styles.closeButton} >X</button>
      <Link to={`/detail/${id}`}>
      <h2>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
export default Card;