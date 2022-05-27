import { useState } from 'react';
import '../../styles/Editor.css';

const editors = [
  'Info',
];

function Editor() {
  const [activeEditor] = useState(0);

  return (
    <div className="Editor">
      <h3>{editors[activeEditor]}</h3>
    </div>
  );
}

export default Editor;
