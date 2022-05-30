import uniqid from 'uniqid';
import Experience from "./Experience";

const inputFields = [
  {
    label: 'Degree',
    placeholder: 'Bachelor of Science',
  },
  {
    label: 'University',
    placeholder: 'University of New York',
  },
  {
    label: 'From',
    placeholder: '2010',
  },
  {
    label: 'To',
    placeholder: '2014',
  },
];
inputFields.forEach(field => field.key = uniqid());

function Education({ data, setData }) {
  const setItems = (items) => {
    setData(({ ...data, education: items }));
  };

  return (
    <Experience
      className="Education"
      inputFields={inputFields}
      items={data.education}
      setItems={setItems}
    />
  );
}

export default Education;
