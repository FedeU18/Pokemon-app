import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

const Card = ({ pokemon }) => {
  return (
    <IonCard>
      <img alt={pokemon.name} src={pokemon.image} />
      <IonCardHeader>
        <IonCardTitle>{pokemon.name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Height: {pokemon.height} <br></br>
        weight: {pokemon.weight} lbs <br />
        Experience: {pokemon.experience} <br />
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
