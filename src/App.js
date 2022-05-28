import { useState } from 'react';
import uniqid from 'uniqid';
import Editor from './components/Editor';
import './styles/App.css';

function App() {
  const createItems = count => Array(count).fill().map(() => ({ key: uniqid() }));
  const [data, setData] = useState({
    education: createItems(1),
    work: createItems(1),
    skills: createItems(3),
  });

  return (
    <div className="App">
      <Editor data={data} setData={setData} />
    </div>
  );
}

export default App;
