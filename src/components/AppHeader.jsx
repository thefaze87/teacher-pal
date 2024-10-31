import { IonHeader, IonToolbar } from '@ionic/react';

export function AppHeader() {
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <div className="app-header">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div>
              <h1 className="app-title">TeachSpark</h1>
              <p className="app-subtitle">AI-Powered Teaching Assistant</p>
            </div>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
} 