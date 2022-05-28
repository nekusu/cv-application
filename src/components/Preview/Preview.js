import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import '../../styles/Preview.css';

function Preview({ data }) {
  const {
    info,
    contact,
    education,
  } = data;

  return (
    <div className="Preview">
      <Header info={info} />
      <Sidebar contact={contact} education={education} />
    </div>
  );
}

export default Preview;
