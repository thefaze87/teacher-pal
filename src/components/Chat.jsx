export function Chat() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 -m-6 p-6 mb-6">
        <h2 className="text-2xl font-bold">Teaching Assistant</h2>
        <p className="text-gray-600 mt-2">
          Get help with lesson planning and teaching strategies
        </p>
      </div>

      <div className="h-[400px] border rounded-lg mb-4 p-4">
        {/* Chat messages will go here */}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ask a question..."
          className="flex-1 rounded-lg border p-2"
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md">
          Send
        </button>
      </div>
    </div>
  )
} 