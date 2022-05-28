import ExperienceItem from "./ExperienceItem";

function Education({ education }) {
  return (
    <section className="Education">
      <h3>EDUCATION</h3>
      {education.map(({ degree, university, from, to, key }) => (
        <ExperienceItem
          key={key}
          title={degree}
          name={university}
          from={from}
          to={to}
        />
      ))}
    </section>
  );
}

export default Education;
