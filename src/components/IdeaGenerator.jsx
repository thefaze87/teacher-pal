import { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
         IonCard, IonCardHeader, IonCardTitle, IonCardContent,
         IonItem, IonLabel, IonSelect, IonSelectOption,
         IonButton, IonIcon, IonChip, IonSpinner,
         IonActionSheet } from '@ionic/react';
import { saveOutline, shareOutline, refreshOutline, bulbOutline } from 'ionicons/icons';
import { AppHeader } from './AppHeader';

const SUBJECTS = [
  'Mathematics', 'Science', 'Language Arts', 'Social Studies',
  'Art', 'Music', 'Physical Education', 'Technology'
];

const GRADE_LEVELS = ['K-2', '3-5', '6-8', '9-12'];

const ACTIVITY_TYPES = [
  'Interactive Game',
  'Group Project',
  'Individual Assignment',
  'Discussion Activity',
  'Hands-on Experiment',
  'Digital Learning',
  'Creative Expression',
  'Problem-Based Learning'
];

export function IdeaGenerator() {
  const [subject, setSubject] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [activityType, setActivityType] = useState('');
  const [generatedIdea, setGeneratedIdea] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const generateIdea = async () => {
    if (!subject || !gradeLevel || !activityType) {
      // Show error toast or alert
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setGeneratedIdea({
        title: `${activityType}: ${subject} Exploration`,
        description: `A ${gradeLevel} ${subject} activity focusing on interactive learning through ${activityType.toLowerCase()}.`,
        objectives: [
          'Students will understand key concepts',
          'Students will develop critical thinking skills',
          'Students will engage in collaborative learning'
        ],
        materials: [
          'Interactive whiteboard',
          'Student worksheets',
          'Digital resources'
        ],
        steps: [
          'Introduction and setup (10 mins)',
          'Main activity (30 mins)',
          'Group discussion (10 mins)',
          'Reflection and assessment (10 mins)'
        ]
      });
    } finally {
      setIsLoading(false);
    }
  };

  const selectOptions = {
    header: 'Select an Option',
    cssClass: 'custom-select',
    mode: 'ios',
    interface: 'action-sheet'
  };

  return (
    <IonPage>
      <AppHeader />
      <IonContent>
        <div className="content-container">
          <h1 className="page-title">Lesson Ideas</h1>
          <IonCard className="generator-card">
            <IonCardContent>
              <div className="generator-header">
                <div className="generator-icon">
                  <IonIcon icon={bulbOutline} />
                </div>
                <div className="generator-title">
                  <h2>Lesson Idea Generator</h2>
                  <p>Create engaging activities in seconds</p>
                </div>
              </div>

              <IonItem lines="none" className="custom-select-item">
                <IonLabel position="stacked">Subject Area</IonLabel>
                <IonSelect 
                  value={subject} 
                  onIonChange={e => setSubject(e.detail.value)}
                  placeholder="Select subject"
                  {...selectOptions}
                >
                  {SUBJECTS.map(sub => (
                    <IonSelectOption key={sub} value={sub}>{sub}</IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>

              <IonItem lines="none" className="custom-select-item">
                <IonLabel position="stacked">Grade Level</IonLabel>
                <IonSelect 
                  value={gradeLevel} 
                  onIonChange={e => setGradeLevel(e.detail.value)}
                  placeholder="Select grade level"
                  {...selectOptions}
                >
                  {GRADE_LEVELS.map(grade => (
                    <IonSelectOption key={grade} value={grade}>{grade}</IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>

              <IonItem lines="none" className="custom-select-item">
                <IonLabel position="stacked">Activity Type</IonLabel>
                <IonSelect 
                  value={activityType} 
                  onIonChange={e => setActivityType(e.detail.value)}
                  placeholder="Select activity type"
                  {...selectOptions}
                >
                  {ACTIVITY_TYPES.map(type => (
                    <IonSelectOption key={type} value={type}>{type}</IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>

              <IonButton 
                expand="block" 
                className="ion-margin-top"
                onClick={generateIdea}
                disabled={isLoading || !subject || !gradeLevel || !activityType}
              >
                {isLoading ? (
                  <IonSpinner name="crescent" />
                ) : (
                  <>Generate Creative Idea</>
                )}
              </IonButton>
            </IonCardContent>
          </IonCard>

          {generatedIdea && (
            <IonCard className="idea-card">
              <IonCardContent>
                <div className="border-l-4 border-primary pl-4 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {generatedIdea.title}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {generatedIdea.description}
                  </p>
                </div>

                <h3 className="font-semibold mb-2">Learning Objectives:</h3>
                <ul className="list-disc pl-6 mb-4">
                  {generatedIdea.objectives.map((obj, i) => (
                    <li key={i} className="mb-1">{obj}</li>
                  ))}
                </ul>

                <h3 className="font-semibold mb-2">Materials Needed:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {generatedIdea.materials.map((material, i) => (
                    <IonChip key={i}>{material}</IonChip>
                  ))}
                </div>

                <h3 className="font-semibold mb-2">Lesson Flow:</h3>
                <ol className="list-decimal pl-6">
                  {generatedIdea.steps.map((step, i) => (
                    <li key={i} className="mb-1">{step}</li>
                  ))}
                </ol>

                <div className="flex justify-end gap-2 mt-4 action-icons">
                  <IonButton fill="clear" onClick={() => setShowActions(true)}>
                    <IonIcon slot="icon-only" icon={shareOutline} />
                  </IonButton>
                  <IonButton fill="clear">
                    <IonIcon slot="icon-only" icon={saveOutline} />
                  </IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          )}

          <IonActionSheet
            isOpen={showActions}
            onDidDismiss={() => setShowActions(false)}
            buttons={[
              {
                text: 'Save to Library',
                icon: saveOutline,
                handler: () => {
                  // Add save functionality
                }
              },
              {
                text: 'Share',
                icon: shareOutline,
                handler: () => {
                  // Add share functionality
                }
              },
              {
                text: 'Cancel',
                role: 'cancel'
              }
            ]}
          />
        </div>
      </IonContent>
    </IonPage>
  );
} 