import Contact from "./Contact";
import Experience from "./Experience";
import Skills from "./Skills";

function Sidebar({ contact, education, skills }) {
  return (
    <div className="Sidebar">
      <Contact contact={contact} />
      <Experience name="Education" education={education} />
      <Skills skills={skills} />
    </div>
  );
}

export default Sidebar;
