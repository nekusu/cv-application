import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import '../../styles/Preview.css';

function Preview({ reference, data }) {
  const {
    info,
    contact,
    education,
    skills,
    work,
  } = data;

  return (
    <div className="PreviewContainer">
      <div ref={reference} className="Preview">
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
    </div>
  );
}

export default Preview;
