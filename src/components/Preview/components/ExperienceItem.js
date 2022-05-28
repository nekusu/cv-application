import capitalize from "capitalize";

function ExperienceItem(props) {
  const {
    title,
    name,
    from,
    to,
    description,
  } = props;

  if (!title || !name) return;

  return (
    <div className="ExperienceItem">
      <h4>{capitalize.words(title)}</h4>
      <h5>{name} {description && <span>| {from} - {to}</span>}</h5>
      {!description && <p>{from} - {to}</p>}
      {description && <p>{description}</p>}
    </div>
  );
}

export default ExperienceItem;
