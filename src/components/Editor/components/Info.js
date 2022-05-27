import uniqid from 'uniqid';
import Input from "./Input";

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
  const handleInput = (key, value) => {
    setData({
      ...data,
      info: {
        ...data?.info,
        [key]: value,
      },
    });
  };

  return (
    <form className="Info">
      {inputFields.map(({ label, placeholder, type, key }) => (
        <Input
          key={key}
          label={label}
          placeholder={placeholder}
          type={type}
          data={data.info}
          handleInput={handleInput}
        />
      ))}
    </form>
  );
}

export default Info;
