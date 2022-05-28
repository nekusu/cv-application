import Header from "./components/Header";
import '../../styles/Preview.css';

function Preview({ data }) {
  const {
    info,
  } = data;

  return (
    <div className="Preview">
      <Header info={info} />
    </div>
  );
}

export default Preview;
