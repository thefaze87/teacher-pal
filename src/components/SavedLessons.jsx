import { useState } from 'react';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonChip } from '@ionic/react';
import { AppHeader } from './AppHeader';

export function SavedLessons() {
  const [lessons] = useState([
    {
      id: '1',
      title: 'Interactive Math Game',
      subject: 'Mathematics',
      gradeLevel: '3-5',
      dateCreated: new Date()
    }
  ]);

  return (
    <IonPage>
      <AppHeader />
      <IonContent className="ion-padding">
        <div className="content-container">
          <h1 className="page-title">My Library</h1>
          <div className="lessons-grid">
          {lessons.map(lesson => (
            <IonCard key={lesson.id}>
                <IonCardHeader>
                <IonCardTitle>{lesson.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                <IonChip>{lesson.subject}</IonChip>
                <IonChip>{lesson.gradeLevel}</IonChip>
                </IonCardContent>
            </IonCard>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
} 