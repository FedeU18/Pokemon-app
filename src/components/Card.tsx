import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import styles from "../styles/Card.module.css";
import { checkmark } from "ionicons/icons";

const Card = ({ pokemon }) => {
  return (
    <IonCard className={styles.card}>
      <img alt={pokemon.name} src={pokemon.image} />
      <IonCardHeader>
        <IonCardTitle>{pokemon.name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Height: {pokemon.height} <br></br>
        Weight: {pokemon.weight} lbs <br />
        Experience: {pokemon.experience} <br />
        Abilites:{" "}
        {pokemon.abilities.map((ability) => (
          <p key={ability.ability.name}>
            <IonIcon icon={checkmark}></IonIcon>
            {ability.ability.name}
          </p>
        ))}
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
