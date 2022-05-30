import uniqid from 'uniqid';
import Experience from "./Experience";

const inputFields = [
  {
    label: 'Title',
    placeholder: 'Software Engineer',
  },
  {
    label: 'Company',
    placeholder: 'Google',
  },
  {
    label: 'From',
    placeholder: '2020',
  },
  {
    label: 'To',
    placeholder: 'Present',
  },
  {
    label: 'Description',
    placeholder: 'I was a software engineer at Google.',
    type: 'textarea',
  },
];
inputFields.forEach(field => field.key = uniqid());

function Work({ data, setData }) {
  const setItems = (items) => {
    setData(({ ...data, work: items }));
  };

  return (
    <Experience
      className="Work"
      inputFields={inputFields}
      items={data.work}
      setItems={setItems}
    />
  );
}

export default Work;
