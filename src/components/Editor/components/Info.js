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
  const { info } = data;
  const handleInput = (key, value) => {
    setData({ ...data, info: { ...info, [key]: value } });
  };

  return (
    <Form
      className="Info"
      inputFields={inputFields}
      data={info}
      handleInput={handleInput}
    />
  );
}

export default Info;
