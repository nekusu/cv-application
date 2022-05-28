import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Form from "./Form";

const inputFields = [
  {
    label: 'First Name',
    placeholder: 'Anna',
  },
  {
    label: 'Last Name',
    placeholder: 'Johnson',
  },
  {
    label: 'Professional Title',
    placeholder: 'Senior Software Engineer',
  },
  {
    label: 'Profile',
    placeholder: 'I am a software engineer with a passion for building software that solves problems.',
    type: 'textarea',
  },
];
inputFields.forEach(field => field.key = uniqid());

function Info({ data, setData }) {
  const [info, setInfo] = useState({ ...data.info });

  useEffect(() => {
    setData(prevData => ({ ...prevData, info }));
  }, [info]);

  return (
    <Form
      className="Info"
      inputFields={inputFields}
      data={info}
      setData={setInfo}
    />
  );
}

export default Info;
