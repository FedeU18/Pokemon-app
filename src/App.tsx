import {
  IonApp,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonHeader,
  IonTitle,
  IonToolbar,
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
import Card from "./components/Card";
import Pagination from "./components/Pagination";

setupIonicReact();

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const getPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const res = await axios.get(`${url}?limit=10&offset=${offset}`);
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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pokemon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Pagination />
      <Card pokemons={pokemons} />
      <Pagination />
    </IonApp>
  );
};

export default App;
