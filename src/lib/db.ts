interface TeachSparkSchema {
  lessons: {
    id: string;
    userId: string;
    title: string;
    category: string;
    subject: string;
    gradeLevel: string;
    description: string;
    materials: string[];
    objectives: string[];
    instructions: string[];
    notes: string;
    dateCreated: Date;
    lastModified: Date;
  }[];
  chatHistory: {
    id: string;
    userId: string;
    messages: {
      role: 'user' | 'assistant';
      content: string;
      timestamp: Date;
    }[];
  }[];
  users: {
    id: string;
    email: string;
    name: string;
    school?: string;
    gradesTaught: string[];
    subjects: string[];
    preferences: {
      defaultSubject: string;
      defaultGradeLevel: string;
      theme: 'light' | 'dark';
    };
  }[];
} 