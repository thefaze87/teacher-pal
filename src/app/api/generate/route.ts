import { Configuration, OpenAIApi } from 'openai';
import { NextResponse } from 'next/server';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { category, subject, gradeLevel } = await req.json();

    const prompt = `Generate a detailed ${category} activity for ${subject} suitable for grade level ${gradeLevel}. Include:
    1. Activity name
    2. Learning objectives
    3. Required materials
    4. Step-by-step instructions
    5. Assessment strategies
    6. Modifications for different learning needs
    
    Format the response in a clear, structured way.`;

    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an experienced educational consultant helping teachers create engaging and effective learning activities."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const idea = completion.data.choices[0].message?.content;

    return NextResponse.json({ idea });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate teaching idea' },
      { status: 500 }
    );
  }
} 