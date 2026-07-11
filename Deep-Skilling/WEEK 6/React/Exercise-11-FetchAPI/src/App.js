import { useState, useEffect } from 'react';
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <div style={{ padding: '20px' }}>
      <h1>Users (Fetch API)</h1>
      <table border="1" cellPadding="8">
        <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>City</th></tr></thead>
        <tbody>{users.map(u => <tr key={u.id}><td>{u.id}</td><td>{u.name}</td><td>{u.email}</td><td>{u.address.city}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
export default App;
