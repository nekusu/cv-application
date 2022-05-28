import { useState } from 'react';
import uniqid from 'uniqid';
import Info from "./components/Info";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Navigator from "./components/Navigator";
import Button from "./components/Button";
import { RiSaveLine } from 'react-icons/ri';
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
  const {
    data,
    setData,
    getImage,
    toggleVisualizer,
  } = props;
  const [activeEditor, setActiveEditor] = useState(0);
  const handleClick = () => {
    getImage();
    toggleVisualizer();
  };
  const saveButton = (
    <Button
      icon={<RiSaveLine />}
      label="Save"
      handleClick={handleClick}
    />
  );
  let editor;

  switch (editors[activeEditor].name) {
    case 'Info':
      editor = <Info data={data} setData={setData} />;
      break;
    case 'Contact':
      editor = <Contact data={data} setData={setData} />;
      break;
    case 'Education':
      editor = <Education data={data} setData={setData} />;
      break;
    case 'Work':
      editor = <Work data={data} setData={setData} />;
      break;
    case 'Skills':
      editor = <Skills data={data} setData={setData} />;
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
        lastButton={saveButton}
      />
    </div>
  );
}

export default Editor;
