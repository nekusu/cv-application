import { useWindowSize } from "@react-hook/window-size";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Zoom from "./components/Zoom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import '../../styles/Preview.css';

const previewWidth = 900;
const previewHeight = 1300;
let lastWidth, lastHeight, lastScale;

function Preview({ data, screenshotRef, transformRef, state }) {
  const {
    info,
    contact,
    education,
    skills,
    work,
  } = data;
  const [windowWidth, windowHeight] = useWindowSize();
  let scale = lastScale;

  if (windowWidth !== lastWidth || windowHeight !== lastHeight) {
    const isBigScreen = windowWidth > 1000;
    const scaleBasedOnWidth = windowWidth * (isBigScreen ? .55 : 1) / previewWidth;
    const scaleBasedOnHeight = windowHeight / previewHeight;
    lastWidth = windowWidth;
    lastHeight = windowHeight;
    scale = Math.min(1, scaleBasedOnWidth, scaleBasedOnHeight) * (isBigScreen ? 1 : 0.87);
    lastScale = scale;
  }

  transformRef.current?.centerView(scale, 0);

  return (
    <div className={`Preview ${state}`}>
      <Zoom transformRef={transformRef} />
      <TransformWrapper
        ref={transformRef}
        minScale={0.4}
        maxScale={1.5}
        initialScale={scale}
        wheel={{ step: 0.1 }}
        centerOnInit
      >
        <TransformComponent
          wrapperClass={`PreviewContainer`}
          contentClass="PreviewContent"
        >
          <div ref={screenshotRef} className="Resume">
            <Header info={info} />
            <Sidebar
              contact={contact}
              education={education}
              skills={skills}
            />
            <main>
              <section className="Profile">
                <h3>PROFILE</h3>
                {info.profile && <p>{info.profile}</p>}
              </section>
              <Experience name="Work Experience" work={work} />
            </main>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default Preview;
