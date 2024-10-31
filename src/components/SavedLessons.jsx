import { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
         IonCard, IonCardHeader, IonCardTitle, IonCardContent,
         IonChip } from '@ionic/react';

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
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Library</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
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
      </IonContent>
    </IonPage>
  );
} 