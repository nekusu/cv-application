import { useEffect, useState } from 'react';
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
  const [education, setEducation] = useState([...data.education]);

  useEffect(() => {
    setData(prevData => ({ ...prevData, education }));
  }, [education]);

  return (
    <Experience
      className="Education"
      items={data.education}
      setItems={setEducation}
      inputFields={inputFields}
    />
  );
}

export default Education;
