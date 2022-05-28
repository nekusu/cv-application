import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";

function Sidebar({ contact, education, skills }) {
  return (
    <div className="Sidebar">
      <Contact contact={contact} />
      <Education education={education} />
      <Skills skills={skills} />
    </div>
  );
}

export default Sidebar;
