import { useState } from 'react';
import uniqid from 'uniqid';
import Info from "./components/Info";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Navigator from "./components/Navigator";
import '../../styles/Editor.css';

const editors = [
  { name: 'Info' },
  { name: 'Contact' },
  { name: 'Education' },
  { name: 'Work' },
  { name: 'Skills' },
];
editors.forEach(editor => editor.key = uniqid());

function Editor(props) {
  const [activeEditor, setActiveEditor] = useState(0);
  let editor;
  switch (editors[activeEditor].name) {
    case 'Info':
      editor = <Info {...props} />;
      break;
    case 'Contact':
      editor = <Contact {...props} />;
      break;
    case 'Education':
      editor = <Education {...props} />;
      break;
    case 'Work':
      editor = <Work {...props} />;
      break;
    case 'Skills':
      editor = <Skills {...props} />;
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
