import { useEffect, useState } from 'react';
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
  const [work, setWork] = useState([...data.work]);

  useEffect(() => {
    setData(prevData => ({ ...prevData, work }));
  }, [work]);

  return (
    <Experience
      className="Work"
      items={data.work}
      setItems={setWork}
      inputFields={inputFields}
    />
  );
}

export default Work;
