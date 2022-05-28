import Detail from "./Detail";

function Skills({ skills }) {
  return (
    <section className="Skills">
      <h3>SKILLS</h3>
      {skills.map(({ name, key }) => (
        <Detail key={key} label={name} />
      ))}
    </section>
  );
}

export default Skills;
