import Contact from "./Contact";
import Education from "./Education";

function Sidebar({ contact, education }) {
  return (
    <div className="Sidebar">
      <Contact contact={contact} />
      <Education education={education} />
    </div>
  );
}

export default Sidebar;
