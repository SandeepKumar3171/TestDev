import { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'

function App() {
  const [data, setData] = useState([])
  const { register, handleSubmit } = useEffect()

  useEffect(() => {
    const result = axios.get('http://localhost:5000/')
      .then((res) => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
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
