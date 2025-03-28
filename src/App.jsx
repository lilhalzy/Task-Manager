import { useState, useEffect } from 'react'
import { TrashIcon } from "@heroicons/react/24/outline";
import { saveTasks, loadTasks } from './utils/localStorage';
import './App.css'

function App() {
    const [tasks, setTasks] = useState(() => {
      const savedTasks = loadTasks('tasks')
      return savedTasks || []
    })
    const [newTask, setNewTask] = useState('')

    const colorPattern = ['bg-white', 'bg-gray-400']

    useEffect(() => {
      saveTasks('tasks', tasks)
    }, [tasks])

    const addTask = () => {
      if (newTask.trim() == '') return;
      setTasks([...tasks, {id: Date.now(), text: newTask, completed: false}])
      setNewTask('')
    }

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
  }

    const toggleTask = (id) => {
      setTasks(
        tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task)
      )
    }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-3xl font-bold text-white-800 text-center mb-2">
        Task Manager
      </h1>
      <p className="text-md italic text-white-200 text-center mb-6">Create your personalised task</p>
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
              className={`${colorPattern[idx % colorPattern.length]} p-3 rounded-md shadow-sm flex justify-between items-center select-none`}
            >
            <span
              onClick={() => toggleTask(task.id)}
              className={`text-gray-700 cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 rounded-md px-2 py-1 hover:bg-red-600"
            >
              <TrashIcon className='h-5 w-5 text-white'/>
            </button>
          </div>
        ))
      )}
      {tasks.length > 0 && (
        <p className="text-sm text-gray-500 italic text-center mt-2">
          Click on any tasks to mark it complete
        </p>
      )}
    </div>
  </div>
  )
}

export default App