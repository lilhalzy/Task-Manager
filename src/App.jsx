import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const colorPattern = ['bg-white', 'bg-gray-400']

  const addTask = () => {
    if (newTask.trim() == '') return;
    setTasks([...tasks, {id: Date.now(), text: newTask}])
    setNewTask('')
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold text-white-800 text-center mb-2">
        Task Manager
      </h1>
      <p className="text-md italic text-white-200 text-center mb-6">Create you personalised task</p>
      {/* Input Form */}
      <form onSubmit={(e) => {
        e.preventDefault()
        addTask()
      }} className="flex justify-center mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          className="border border-gray-300 rounded-md p-2 w-3/4 mr-2 focus:outline-none focus:ring-1 focus:ring-grey-500"
          placeholder="Add a new task"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      {/* Task List */}
      <div className="space-y-2">
        {tasks.length === 0 ? (
          <p className="text-gray-500 italic text-center">No tasks yet!</p>
        ) : (
          [...tasks].reverse().map((task, idx) => (
            <div
              key={task.id}
              className={`${colorPattern[idx % colorPattern.length]} p-3 rounded-md shadow-sm flex justify-between items-center`}
            >
              <span className="text-gray-700">{task.text}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App
