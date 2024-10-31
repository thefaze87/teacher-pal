export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">TeachSpark</h1>
        <p className="text-xl">Your AI Teaching Assistant</p>
      </div>
      
      <IdeaGenerator />
      
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Feature
          title="Activity Generator"
          description="Create engaging learning activities for any subject and grade level"
        />
        <Feature
          title="Lesson Planning"
          description="Get AI assistance in planning effective lessons"
        />
        <Feature
          title="Resource Library"
          description="Save and organize your teaching materials"
        />
        <Feature
          title="Teaching Assistant"
          description="Chat with AI for teaching advice and support"
        />
      </div>
    </main>
  );
} 