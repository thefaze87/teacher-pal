import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Lesson {
  id: string;
  title: string;
  category: string;
  subject: string;
  gradeLevel: string;
  content: string;
  dateCreated: Date;
}

export function SavedLessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const saveLessonToLibrary = (lesson: Lesson) => {
    setLessons(prev => [...prev, lesson]);
    // Add persistence logic here
  };

  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 p-6">
        <h2 className="text-2xl font-bold">My Lesson Library</h2>
        <p className="text-muted-foreground mt-2">
          Save and organize your teaching materials
        </p>
      </div>

      <div className="p-6 space-y-4">
        {lessons.map(lesson => (
          <Card key={lesson.id} className="p-4 hover:shadow-medium transition-shadow">
            <h3 className="text-xl font-semibold">{lesson.title}</h3>
            <div className="flex gap-2 text-sm text-muted-foreground mt-2">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                {lesson.subject}
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                {lesson.gradeLevel}
              </span>
            </div>
            <p className="mt-4">{lesson.content}</p>
          </Card>
        ))}
      </div>
    </Card>
  );
} 