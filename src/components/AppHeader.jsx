import { IonHeader, IonToolbar } from '@ionic/react';

export function AppHeader() {
  return (
    <IonHeader className="modern-header ion-no-border">
      <IonToolbar>
        <div className="app-header">
          <div className="logo-container">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" 
                      fill="url(#gradient)" stroke="white" strokeWidth="2"/>
                <defs>
                  <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="12">
                    <stop stopColor="#6366F1"/>
                    <stop offset="1" stopColor="#A855F7"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="logo-text">
              <h1 className="app-title">TeachSpark</h1>
              <p className="app-subtitle">AI Teaching Assistant</p>
            </div>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
} 