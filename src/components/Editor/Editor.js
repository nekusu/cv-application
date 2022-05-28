import { useState } from 'react';
import uniqid from 'uniqid';
import Info from "./components/Info";
import Navigator from "./components/Navigator";
import '../../styles/Editor.css';

const editors = [
  { name: 'Info' },
];
editors.forEach(editor => editor.key = uniqid());

function Editor({ data, setData }) {
  const [activeEditor, setActiveEditor] = useState(0);

  return (
    <div className="Editor">
      <h3>{editors[activeEditor].name}</h3>
      <Info data={data} setData={setData} />
      <Navigator
        index={activeEditor}
        setIndex={setActiveEditor}
        items={editors}
      />
    </div>
  );
}

export default Editor;
