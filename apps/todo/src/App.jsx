import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>

        {/* Input and Add Button */}
        <div className="flex w-full mb-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded-l-md"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add Task..."
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="w-full flex flex-col items-center">
          <ul className="w-full space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-gray-200 p-2 rounded w-full"
              >
                <span
                  className={`flex-1 cursor-pointer ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                  onClick={() => toggleCompleted(todo.id)}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
