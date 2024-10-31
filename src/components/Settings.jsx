import { IonPage, IonContent, IonList, IonItem, IonLabel, IonToggle, IonSelect, 
         IonSelectOption, IonButton, IonIcon } from '@ionic/react';
import { personOutline, notificationsOutline, colorPaletteOutline,
         cloudDownloadOutline, helpCircleOutline } from 'ionicons/icons';
import { AppHeader } from './AppHeader';

export function Settings() {
  return (
    <IonPage>
      <AppHeader />
      <IonContent>
      <div className="content-container">
          <h1 className="page-title">Settings</h1>
          <div className="settings-list">
            <IonList>
            <IonItem>
                <IonIcon icon={personOutline} slot="start" />
                <IonLabel>
                <h2>Account</h2>
                <p>Manage your profile and preferences</p>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonIcon icon={notificationsOutline} slot="start" />
                <IonLabel>Notifications</IonLabel>
                <IonToggle slot="end" />
            </IonItem>

            <IonItem>
                <IonIcon icon={colorPaletteOutline} slot="start" />
                <IonLabel>Theme</IonLabel>
                <IonSelect interface="action-sheet" value="light">
                <IonSelectOption value="light">Light</IonSelectOption>
                <IonSelectOption value="dark">Dark</IonSelectOption>
                <IonSelectOption value="system">System</IonSelectOption>
                </IonSelect>
            </IonItem>
            </IonList>
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
} 