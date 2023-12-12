import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";

const Pagination = () => {
  return (
    <div>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonButton fill="outline" color={"tertiary"}>
              Prev
            </IonButton>
          </IonCol>
          <IonCol>
            <div>1 of {0}</div>
          </IonCol>
          <IonCol>
            <IonButton fill="outline" color={"tertiary"}>
              Next
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default Pagination;
