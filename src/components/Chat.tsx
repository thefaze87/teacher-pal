const TEACHING_PROMPT = `I am an AI teaching assistant specialized in:
- Lesson planning and activity design
- Classroom management strategies
- Differentiation techniques
- Assessment creation
- Educational technology integration
- Parent communication strategies`;

export function Chat() {
  return (
    <Card className="overflow-hidden h-[600px] flex flex-col">
      <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 p-6">
        <h2 className="text-2xl font-bold">Teaching Assistant</h2>
        <p className="text-muted-foreground mt-2">
          Get help with lesson planning and teaching strategies
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.role === 'user'
                  ? 'bg-yellow-400 text-black'
                  : 'bg-muted'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Button
            onClick={sendMessage}
            disabled={loading}
            className="bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            Send
          </Button>
        </div>
      </div>
    </Card>
  )
} 