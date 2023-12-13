import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { arrowForward, arrowBack } from "ionicons/icons";

import styles from "../styles/Pagination.module.css";

const Pagination = ({ offset, setOffset, allPokemons }) => {
  const totalPages = Math.floor(allPokemons?.length / 10);

  const handleNext = (e) => {
    e.preventDefault();
    setOffset(offset < allPokemons.length ? offset + 10 : offset);
  };
  const handlePrev = (e) => {
    e.preventDefault();
    setOffset(offset === 0 ? 0 : offset - 10);
  };

  return (
    <div>
      <IonGrid className={styles.pagination} fixed={true}>
        <IonRow className={styles.row}>
          <IonCol size="2" className={styles.col}>
            <IonButton
              onClick={handlePrev}
              disabled={!offset}
              fill="outline"
              color={"tertiary"}
            >
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol size="3" className={styles.col}>
            <div>
              {offset / 10 + 1} of {totalPages + 1}
            </div>
          </IonCol>
          <IonCol size="2" className={styles.col}>
            <IonButton
              disabled={offset > allPokemons.length - 10}
              onClick={handleNext}
              fill="outline"
              color={"tertiary"}
            >
              <IonIcon icon={arrowForward}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default Pagination;
