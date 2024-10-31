import { useState, useRef, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
         IonFooter, IonItem, IonInput, IonButton, IonIcon,
         IonAvatar, IonSpinner, IonList, IonCard, IonCardContent,
         IonRefresher, IonRefresherContent } from '@ionic/react';
import { sendOutline, chevronDownCircleOutline } from 'ionicons/icons';

export function Chat() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your teaching assistant. I can help you with lesson planning, activity ideas, and teaching strategies. What would you like help with today?"
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const contentRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollToBottom(300);
    }
  }, [messages]);

  const handleRefresh = async (event) => {
    // Clear chat history except for the welcome message
    setMessages([messages[0]]);
    event.detail.complete();
  };

  const handleSend = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: newMessage.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    try {
      // Simulate API call to AI service
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I understand you're asking about "${newMessage}". Let me help you with that. Here's a detailed response that would come from the AI...`
      };

      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Teaching Assistant</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent ref={contentRef} className="ion-padding chat-content">
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent
            pullingIcon={chevronDownCircleOutline}
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing...">
          </IonRefresherContent>
        </IonRefresher>

        <IonList>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-container ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
            >
              {message.role === 'assistant' && (
                <IonAvatar className="message-avatar">
                  <img src="/assistant-avatar.png" alt="AI" />
                </IonAvatar>
              )}
              <IonCard className={`message-card ${message.role}-card`}>
                <IonCardContent>{message.content}</IonCardContent>
              </IonCard>
            </div>
          ))}

          {isTyping && (
            <div className="message-container assistant-message">
              <IonAvatar className="message-avatar">
                <img src="/assistant-avatar.png" alt="AI" />
              </IonAvatar>
              <IonCard className="message-card assistant-card">
                <IonCardContent>
                  <IonSpinner name="dots" />
                </IonCardContent>
              </IonCard>
            </div>
          )}
        </IonList>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonItem lines="none">
            <IonInput
              ref={inputRef}
              placeholder="Type your message..."
              value={newMessage}
              onIonChange={e => setNewMessage(e.detail.value)}
              onKeyPress={handleKeyPress}
              className="chat-input"
              clearInput={true}
            />
            <IonButton 
              slot="end" 
              fill="clear" 
              onClick={handleSend}
              disabled={!newMessage.trim() || isTyping}
            >
              <IonIcon icon={sendOutline} />
            </IonButton>
          </IonItem>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
} 