import Contact from "./Contact";

function Sidebar({ contact }) {
  return (
    <div className="Sidebar">
      <Contact contact={contact} />
    </div>
  );
}

export default Sidebar;
