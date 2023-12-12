import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

const Card = ({ pokemons }) => {
  return (
    <IonCard>
      <img alt={pokemons[0]?.name} src={pokemons[0]?.image} />
      <IonCardHeader>
        <IonCardTitle>{pokemons[0]?.name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Height: {pokemons[0]?.height} <br></br>
        weight: {pokemons[0]?.weight} lbs <br />
        Experience: {pokemons[0]?.experience} <br />
      </IonCardContent>
    </IonCard>
  );
};

export default Card;
