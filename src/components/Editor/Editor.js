import { useState } from 'react';
import Info from "./components/Info";
import '../../styles/Editor.css';

const editors = [
  'Info',
];

function Editor({ data, setData }) {
  const [activeEditor] = useState(0);

  return (
    <div className="Editor">
      <h3>{editors[activeEditor]}</h3>
      <Info data={data} setData={setData} />
    </div>
  );
}

export default Editor;
