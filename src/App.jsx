import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() == '') return;
    setTasks([...tasks, {id: Date.now(), text: newTask}])
    setNewTask('')
  }

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Task Manager
      </h1>
      {/* Input Form */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-3/4 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {/* Task List */}
      <div className="space-y-2">
        {tasks.length === 0 ? (
          <p className="text-gray-500 italic text-center">No tasks yet!</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white p-3 rounded-md shadow-sm flex justify-between items-center"
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
