import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select } from '@/components/ui/select';

const CATEGORIES = [
  'Cooperative Learning',
  'Project-Based Learning',
  'Game-Based Activities',
  'Interactive Discussions',
  'Hands-on Experiments',
  'Digital Learning',
  'Inquiry-Based Learning',
  'Differentiated Instruction',
  'STEM Activities',
  'Peer Teaching',
  'Role-Playing',
  'Station Rotation',
  'Flipped Learning',
  'Problem-Based Learning',
  'Visual Learning',
  'Kinesthetic Activities'
] as const;

const SUBJECTS = [
  'Mathematics',
  'Science',
  'Language Arts',
  'Social Studies',
  'Art',
  'Music',
  'Physical Education',
  'Computer Science',
  'Foreign Languages',
  'Environmental Studies',
  'Health Education',
  'Economics',
  'Geography',
  'History',
  'Chemistry',
  'Physics',
  'Biology',
  'Engineering',
  'Drama/Theater',
  'Special Education'
] as const;

const GRADE_LEVELS = [
  'Pre-K',
  'K',
  '1st Grade',
  '2nd Grade',
  '3rd Grade',
  '4th Grade',
  '5th Grade',
  '6th Grade',
  '7th Grade',
  '8th Grade',
  '9th Grade',
  '10th Grade',
  '11th Grade',
  '12th Grade',
  'Higher Education',
  'Special Education'
] as const;

export function IdeaGenerator() {
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [subject, setSubject] = useState<string>(SUBJECTS[0]);
  const [gradeLevel, setGradeLevel] = useState<string>(GRADE_LEVELS[0]);
  const [idea, setIdea] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const generateIdea = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category,
          subject,
          gradeLevel,
        }),
      });
      
      const data = await response.json();
      setIdea(data.idea);
    } catch (error) {
      console.error('Error generating idea:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 p-6">
          <h2 className="text-2xl font-bold">Generate Teaching Activity</h2>
          <p className="text-muted-foreground mt-2">
            Create engaging activities for your classroom
          </p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Activity Type</label>
              <Select
                value={category}
                onValueChange={setCategory}
                options={CATEGORIES.map(cat => ({ value: cat, label: cat }))}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Select
                value={subject}
                onValueChange={setSubject}
                options={SUBJECTS.map(sub => ({ value: sub, label: sub }))}
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Grade Level</label>
            <Select
              value={gradeLevel}
              onValueChange={setGradeLevel}
              options={GRADE_LEVELS.map(grade => ({ value: grade, label: grade }))}
              className="w-full"
            />
          </div>

          <Button
            onClick={generateIdea}
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating...
              </span>
            ) : (
              'Generate Activity'
            )}
          </Button>
        </div>

        {idea && (
          <div className="border-t p-6">
            <h3 className="text-xl font-semibold mb-4">Your Teaching Activity</h3>
            <div className="p-4 bg-muted rounded-lg whitespace-pre-wrap">
              {idea}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
