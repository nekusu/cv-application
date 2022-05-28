function Visualizer(props) {
  const {
    state,
    image,
    toggleVisualizer,
  } = props;

  return (
    <div
      className={`Visualizer ${state}`}
      onClick={() => toggleVisualizer(false)}
    >
      <img src={image} />
    </div>
  );
}

export default Visualizer;
