import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, 
         IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { bulbOutline, chatbubbleOutline, libraryOutline, settingsOutline } from 'ionicons/icons';

import { IdeaGenerator } from './components/IdeaGenerator';
import { Chat } from './components/Chat';
import { SavedLessons } from './components/SavedLessons';
import { Settings } from './components/Settings';

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/generator" component={IdeaGenerator} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/library" component={SavedLessons} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/">
              <Redirect to="/generator" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar 
            slot="bottom" 
            className="tab-bar ion-padding-bottom"
          >
            <IonTabButton tab="generator" href="/generator" className="tab-button">
              <div className="tab-button-inner">
                <IonIcon icon={bulbOutline} />
                <IonLabel>Ideas</IonLabel>
              </div>
            </IonTabButton>
            
            <IonTabButton tab="chat" href="/chat" className="tab-button">
              <div className="tab-button-inner">
                <IonIcon icon={chatbubbleOutline} />
                <IonLabel>Assistant</IonLabel>
              </div>
            </IonTabButton>
            
            <IonTabButton tab="library" href="/library" className="tab-button">
              <div className="tab-button-inner">
                <IonIcon icon={libraryOutline} />
                <IonLabel>Library</IonLabel>
              </div>
            </IonTabButton>
            
            <IonTabButton tab="settings" href="/settings" className="tab-button">
              <div className="tab-button-inner">
                <IonIcon icon={settingsOutline} />
                <IonLabel>Settings</IonLabel>
              </div>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App; 