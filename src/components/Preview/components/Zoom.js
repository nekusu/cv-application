import Button from '../../Button';
import {
  RiZoomOutLine,
  RiZoomInLine,
} from 'react-icons/ri';

const zoomStep = 0.25;

function Zoom({ transformRef }) {
  return (
    <div className="Zoom">
      <Button
        icon={<RiZoomOutLine />}
        title="Zoom Out"
        handleClick={() => transformRef.current?.zoomOut(zoomStep, 0)}
        alt
      />
      <Button
        icon={<RiZoomInLine />}
        title="Zoom In"
        handleClick={() => transformRef.current?.zoomIn(zoomStep, 0)}
        alt
      />
    </div>
  );
}

export default Zoom;
