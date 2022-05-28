import { useState } from 'react';
import uniqid from 'uniqid';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './styles/App.css';

function App() {
  const createItems = count => Array(count).fill().map(() => ({ key: uniqid() }));
  const [data, setData] = useState({
    info: {},
    contact: {},
    education: createItems(1),
    work: createItems(1),
    skills: createItems(3),
  });

  return (
    <div className="App">
      <Editor data={data} setData={setData} />
      <Preview data={data} />
    </div>
  );
}

export default App;
