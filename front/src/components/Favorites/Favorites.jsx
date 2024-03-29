import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Favorites/Favorites.module.css";
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value))
  }

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  return (
    <div>
      <div>
        <select onChange={handlerOrder}>
          <option value="order" disabled="disabled">Order By</option> 
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
          <option value="order" disabled="disabled"></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
      {myFavorites.map((character) => {
        return (
          <div className={styles.card}>
            <Link to={`/detail/${character.id}`}>
              <h2>{character.name}</h2>
            </Link>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
