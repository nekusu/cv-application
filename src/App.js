import { createRef, useState } from 'react';
import { useTransition } from 'react-transition-state';
import { useScreenshot } from 'use-react-screenshot';
import uniqid from 'uniqid';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Visualizer from './components/Visualizer';
import generateData from './utils/generateData';
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
  const screenshotRef = createRef(null);
  const transformRef = createRef(null);
  const [image, takeScreenshot] = useScreenshot({ type: "image/png", quality: 1.0 });
  const getImage = () => {
    transformRef.current?.centerView(1, 0);
    takeScreenshot(screenshotRef.current);
  };
  const [previewState, togglePreview] = useTransition({ timeout: 300 });
  const [visualizerState, toggleVisualizer] = useTransition({ timeout: 300 });

  return (
    <div className="App">
      <Editor
        data={data}
        setData={setData}
        autofill={() => setData(generateData())}
        getImage={getImage}
        toggleVisualizer={toggleVisualizer}
        togglePreview={togglePreview}
      />
      <Preview
        data={data}
        screenshotRef={screenshotRef}
        transformRef={transformRef}
        state={previewState}
      />
      <Visualizer
        state={visualizerState}
        image={image}
        toggleVisualizer={toggleVisualizer}
      />
    </div>
  );
}

export default App;
