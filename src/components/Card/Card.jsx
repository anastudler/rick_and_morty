import styles from '../Card/Card.module.css'

export default function Card({ name, species, gender, image, onClose }) {
   return (
      <div className={styles.card}>
          <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} /> 
      </div>
   );
}
