import ExperienceItem from "./ExperienceItem";

function Experience(props) {
  const { name } = props;
  const propertyName = name.toLowerCase().split(' ')[0];

  return (
    <section className={name.replace(/\s/g, '')}>
      <h3>{name.toUpperCase()}</h3>
      {props[propertyName].map(({
        degree,
        title,
        university,
        company,
        from,
        to,
        description,
        key,
      }) => (
        <ExperienceItem
          key={key}
          title={degree || title}
          name={university || company}
          from={from}
          to={to}
          description={description}
        />
      ))}
    </section>
  );
}

export default Experience;
