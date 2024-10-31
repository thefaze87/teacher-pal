export const teacherPrompt = `You are an experienced educational consultant helping teachers create engaging and effective learning activities. Consider:
- Learning objectives and standards
- Student engagement and participation
- Differentiation strategies
- Assessment opportunities
- Required materials and preparation
- Time management

Please provide detailed teaching ideas that incorporate best practices in education.`;

export const generateTeachingIdea = (category: string, subject: string, gradeLevel: string) => {
  return `Generate a creative ${category} activity for ${subject} suitable for grade level ${gradeLevel}. Include:
  1. Activity name and description
  2. Learning objectives
  3. Required materials
  4. Step-by-step instructions
  5. Assessment strategies
  6. Modifications for different learning needs`;
}; 