import './App.css';
import { useState } from 'react';

function App() {
  const [selects,setSelects]=useState("Sameer");
function connectionsListToGraph(connections) {
  const Graph = {}
  for (let { name, friends } of connections) {
    Graph[name] = friends 
  }
  return Graph
}

function getConnections(source, target, connections) {

  const Graph = connectionsListToGraph(connections)
  const connectionPaths = []

  function findConnectionsDFS(source, target, path = [source], visited = {}) {
  
    if (visited[source]) return; 
    visited[source] = true; 

    for (let friend of Graph[source]) {
      if (friend === target) {
        connectionPaths.push(path.concat(target));
      } else {
        findConnectionsDFS(friend, target, path.concat(friend), visited)
      }
    }
  }
  findConnectionsDFS(source, target);
  return connectionPaths;
}


let connections = [
  {
    "name": "Sameer",
    "friends": ["Aayushi", "Kamalnath"]
  },
  {
    "name": "Aayushi",
    "friends": ["Bhaskar"]
  },
  {
    "name": "Kamalnath",
    "friends": ["Shanti"]
  },
  {
    "name": "Shanti",
    "friends": ["Bhaskar"]
  }
]


  return (
    <div className="App">
      <h2>Please select a name to see connection with Bhaskar </h2>
     <div className='select'>
        <select value={selects} onChange={e=>setSelects(e.target.value)}>
          <option >
            Sameer
          </option>
          <option>
          Aayushi
          </option>
          <option>
          Kamalnath
          </option>
          <option>
          Shanti
          </option>
        </select>
        </div>
        <div className='result'>
          Connection betweeen {selects} and Bhaskar :
          {getConnections(selects, 'Bhaskar', connections).join(" ")}
          
        </div>
      </div>
  );
}

export default App;
 