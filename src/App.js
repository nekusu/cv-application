import { useState } from 'react';
import uniqid from 'uniqid';
import Editor from './components/Editor';
import './styles/App.css';

function App() {
  const [data, setData] = useState({
    education: [{
      key: uniqid(),
    }],
    work: [{
      key: uniqid(),
    }],
  });

  return (
    <div className="App">
      <Editor data={data} setData={setData} />
    </div>
  );
}

export default App;
