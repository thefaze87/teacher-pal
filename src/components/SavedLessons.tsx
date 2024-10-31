import { useState } from 'react';

interface Lesson {
  id: string;
  title: string;
  category: string;
  subject: string;
  gradeLevel: string;
  content: string;
  dateCreated: Date;
}

export default function SavedLessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">My Lesson Library</h2>
        
        <div className="space-y-4">
          {lessons.map(lesson => (
            <div key={lesson.id} className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold">{lesson.title}</h3>
              <div className="flex gap-2 text-sm text-gray-600 mt-2">
                <span>{lesson.subject}</span>
                <span>•</span>
                <span>{lesson.gradeLevel}</span>
              </div>
            </div>
          ))}
          
          {lessons.length === 0 && (
            <p className="text-gray-500 text-center py-8">
              No saved lessons yet. Generate some ideas to get started!
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 