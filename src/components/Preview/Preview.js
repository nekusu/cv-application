import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import '../../styles/Preview.css';

function Preview({ data }) {
  const {
    info,
    contact,
  } = data;

  return (
    <div className="Preview">
      <Header info={info} />
      <Sidebar contact={contact} />
    </div>
  );
}

export default Preview;
