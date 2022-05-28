import { useState } from 'react';
import uniqid from 'uniqid';
import Info from "./components/Info";
import Contact from "./components/Contact";
import Navigator from "./components/Navigator";
import '../../styles/Editor.css';

const editors = [
  { name: 'Info' },
  { name: 'Contact' },
];
editors.forEach(editor => editor.key = uniqid());

function Editor({ data, setData }) {
  const [activeEditor, setActiveEditor] = useState(0);
  let editor;
  switch (editors[activeEditor].name) {
    case 'Info':
      editor = <Info data={data} setData={setData} />;
      break;
    case 'Contact':
      editor = <Contact data={data} setData={setData} />;
      break;
  }

  return (
    <div className="Editor">
      <h3>{editors[activeEditor].name}</h3>
      {editor}
      <Navigator
        index={activeEditor}
        setIndex={setActiveEditor}
        items={editors}
      />
    </div>
  );
}

export default Editor;
