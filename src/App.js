import { useState } from 'react';
import Editor from './components/Editor';
import './styles/App.css';

function App() {
  const [data, setData] = useState({});

  return (
    <div className="App">
      <Editor data={data} setData={setData} />
    </div>
  );
}

export default App;
