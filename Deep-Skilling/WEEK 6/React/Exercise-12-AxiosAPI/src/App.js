import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => setTodos(res.data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List (Axios)</h1>
      <ul>{todos.map(t => <li key={t.id} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.title}</li>)}</ul>
    </div>
  );
}
export default App;
