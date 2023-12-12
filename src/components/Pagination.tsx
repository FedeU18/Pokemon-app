import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { arrowForward, arrowBack } from "ionicons/icons";

import styles from "../styles/Pagination.module.css";

const Pagination = () => {
  return (
    <div>
      <IonGrid className={styles.pagination} fixed={true}>
        <IonRow className={styles.row}>
          <IonCol size="2" className={styles.col}>
            <IonButton fill="outline" color={"tertiary"}>
              <IonIcon icon={arrowBack}></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol size="3" className={styles.col}>
            <div>1 of {0}</div>
          </IonCol>
          <IonCol size="2" className={styles.col}>
            <IonButton fill="outline" color={"tertiary"}>
              <IonIcon icon={arrowForward}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default Pagination;
