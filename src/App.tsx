import {
  IonApp,
  IonInfiniteScroll,
  IonHeader,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar,
  setupIonicReact,
  IonContent,
} from "@ionic/react";
import styles from "./styles/App.module.css";

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
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const getAllPokemons = async () => {
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
    setAllPokemons(resumeData);
  };

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
  }, [offset]);
  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pokemon</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Pagination
          offset={offset}
          setOffset={setOffset}
          allPokemons={allPokemons}
        />
        <IonInfiniteScroll>
          <IonList className={styles.list}>
            {pokemons.map((pokemon) => (
              <IonItem key={pokemon.name}>
                <Card pokemon={pokemon} />
              </IonItem>
            ))}
          </IonList>
        </IonInfiniteScroll>
        <Pagination
          offset={offset}
          setOffset={setOffset}
          allPokemons={allPokemons}
        />
      </IonContent>
    </IonApp>
  );
};

export default App;
