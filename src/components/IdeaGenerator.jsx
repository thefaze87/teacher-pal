export function IdeaGenerator() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 -m-6 p-6 mb-6">
        <h2 className="text-2xl font-bold">Generate Teaching Activity</h2>
        <p className="text-gray-600 mt-2">
          Create engaging activities for your classroom
        </p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Activity Type</label>
          <select className="w-full rounded-md border p-2">
            <option>Cooperative Learning</option>
            <option>Project-Based Learning</option>
            <option>Game-Based Activities</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Subject</label>
          <select className="w-full rounded-md border p-2">
            <option>Mathematics</option>
            <option>Science</option>
            <option>Language Arts</option>
          </select>
        </div>

        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md">
          Generate Activity
        </button>
      </div>
    </div>
  )
} 