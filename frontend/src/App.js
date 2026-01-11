import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const result = axios.get('http://localhost:5000/')
      .then((res) => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>
        Hello
      </h1>
      {data && data.length > 0 && data.map(item => (
        <div key={item.ID} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px' }}>
          <h4>Name:{item?.user}</h4>
          <h4>Amount:{item?.price}</h4>
        </div>
      ))}

    </div >
  );
}

export default App;
