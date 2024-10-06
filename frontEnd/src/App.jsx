import React, { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
     fetch('http://localhost:8081/exemplocurso')
     .then(res => res.json())
     .then(data => setData(data))
     .catch(err => console.log(err));
  }, [])
  return(
    <div style ={{padding: "50px"}}>
      <table>
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>Estoque</th>
        </thead>
        <tbody>
           {data.map((d , i )=> (
            <tr key={i}>
                <td>{d.id}</td>
                <td>{d.nome}</td>
                <td>{d.estoque}</td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default App