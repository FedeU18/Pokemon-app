import {
  IonApp,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonHeader,
  IonTitle,
  setupIonicReact,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useEffect, useState } from "react";
import axios from "axios";

setupIonicReact();

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const res = await axios.get(`${url}?limit=100000&offset=0`);
    const data = res.data.results;

    const promises = data.map(async (pokemon) => {
      const res = await axios.get(pokemon.url);
      return res.data;
    });

    const results = await Promise.all(promises);
    const resumeData = results.map((p) => {
      return {
        name: p.name || "",
        experience: p.base_experience || "",
        height: p.height || "",
        weight: p.weight || "",
        abilities: p.abilities || "",
        image: p.sprites.front_default || "",
      };
    });
    setPokemons(resumeData);
  };

  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <IonApp>
      {/* <IonHeader>
        <IonTitle>Pokemon</IonTitle>
      </IonHeader> */}
      <IonCard>
        <img alt={pokemons[0].name} src={pokemons[0].image} />
        <IonCardHeader>
          <IonCardTitle>{pokemons[0].name}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Height: {pokemons[0].height} <br></br>
          weight: {pokemons[0].weight} lbs <br />
          Experience: {pokemons[0].experience} <br />
        </IonCardContent>
      </IonCard>
    </IonApp>
  );
};

export default App;
