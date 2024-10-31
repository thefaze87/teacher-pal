import { useState } from 'react';

const CATEGORIES = [
  'Cooperative Learning',
  'Project-Based Learning',
  'Game-Based Activities',
  'Interactive Discussions',
  'Hands-on Experiments',
];

const SUBJECTS = [
  'Mathematics',
  'Science',
  'Language Arts',
  'Social Studies',
  'Art',
];

const GRADE_LEVELS = [
  'K-2',
  '3-5',
  '6-8',
  '9-12',
];

export function IdeaGenerator() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [gradeLevel, setGradeLevel] = useState(GRADE_LEVELS[0]);
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);

  const generateIdea = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIdea(`Here's a ${category} activity for ${subject} (${gradeLevel})`);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Generate Teaching Activity</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Activity Type</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md border p-2"
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Subject</label>
          <select 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-md border p-2"
          >
            {SUBJECTS.map(sub => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Grade Level</label>
          <select 
            value={gradeLevel}
            onChange={(e) => setGradeLevel(e.target.value)}
            className="w-full rounded-md border p-2"
          >
            {GRADE_LEVELS.map(grade => (
              <option key={grade} value={grade}>{grade}</option>
            ))}
          </select>
        </div>

        <button
          onClick={generateIdea}
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Activity'}
        </button>

        {idea && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            {idea}
          </div>
        )}
      </div>
    </div>
  );
} 