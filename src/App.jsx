import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const checkTodo = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].completed = e.target.checked;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // ฟังก์ชันเพิ่มราบการ todo ใหม่ ✨
  const addTodo = () => {
    // Object ที่จะทำการเพิ่มเข้าไปใน todos
    const newTodo = {
      title,
      completed: false,
    };

    // ทำการ Array destructuring แล้วก็เพิ่ม newTodo เข้าไปใน Array ก่อนนั้นด้วย
    setTodos([...todos, newTodo]);
    // เมื่อทำการเพิ่ม todo รายการใหม่เสร็จแล้ว เราทำการล้างค่าในช่อง input ได้โดยการ setTitle เป็น ""
    setTitle("");
  };

  return (
    <div className="container">
      <div className="app">
        <h1>Todo App</h1>
        <label>
          Title
          <input
            className="textField"
            type="text"
            placeholder="Hit the sack."
            onChange={handleTitleChange}
            value={title}
          />
        </label>
        <div className="toolbar">
          <button onClick={addTodo} className="button button-add">
            Add
          </button>
        </div>

        <hr />

        {/* เมื่อไม่มีรายการ todos จะให้ทำการแสดงว่าไม่มีรายการ */}
        {todos.length === 0 && <div className="noTodo">No todos found</div>}

        <div className="todos">
          {/* todos.map เป็นการ Loop ค่ามาแสดงผลโดยนำค่าในรายการ todos แต่ละรายการมาแสดง ✨ */}
          {todos.map((todo, index) => (
            <div key={index} className="todo">
              <div className="todo-title">
                <input
                  className="todo-checkbox"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => checkTodo(e, index)}
                />

                <span className={todo.completed ? "checked" : ""}>{todo.title}</span>
              </div>
              <button onClick={() => deleteTodo(index)} className="button button-delete">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
