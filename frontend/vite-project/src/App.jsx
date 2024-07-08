import { useState, useEffect } from 'react';
import { fetchData, postData } from './services/api';

function App() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    fetchData().then(data => setMessage(data.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(data).then(result => setResponse(result.message));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button type="submit">Send Data</button>
        </form>
        <p>{response}</p>
      </header>
    </div>
  );
}

export default App;
