import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css'

export default function Cards({ characters }) {
   
   return <div className={styles.contenedor}>
      {characters.map(({id, name, species, gender,image}) => {
         return <Card 
         key={id}
         name={name} 
         species={species}
         gender={gender}
         image={image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      })}
   </div>;
}
