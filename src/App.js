import { createRef, useState } from 'react';
import { useTransition } from 'react-transition-state';
import { useScreenshot } from 'use-react-screenshot';
import uniqid from 'uniqid';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Visualizer from './components/Visualizer';
import './styles/App.css';

function App() {
  const createItems = count => {
    return Array(count).fill().map(() => ({ key: uniqid() }));
  };
  const [data, setData] = useState({
    info: {},
    contact: {},
    education: createItems(1),
    work: createItems(1),
    skills: createItems(3),
  });
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot({ type: "image/png", quality: 1.0 });
  const getImage = () => takeScreenshot(ref.current);
  const [transitionState, toggleVisualizer] = useTransition({ timeout: 300 });

  return (
    <div className="App">
      <Editor
        data={data}
        setData={setData}
        getImage={getImage}
        toggleVisualizer={toggleVisualizer}
      />
      <Preview
        data={data}
        reference={ref}
      />
      <Visualizer
        state={transitionState}
        image={image}
        toggleVisualizer={toggleVisualizer}
      />
    </div>
  );
}

export default App;
