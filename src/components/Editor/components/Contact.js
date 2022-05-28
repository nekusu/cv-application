import uniqid from 'uniqid';
import Input from "./Input";

const inputFields = [
  {
    label: 'Website',
    placeholder: 'annajohnson.com',
  },
  {
    label: 'Email',
    placeholder: 'annajohnson@email.com',
  },
  {
    label: 'Location',
    placeholder: 'New York, NY',
  },
  {
    label: 'Phone',
    placeholder: '555-555-5555',
  },
];
inputFields.forEach(field => field.key = uniqid());

function Contact({ data, setData }) {
  const handleInput = (key, value) => {
    setData({
      ...data,
      contact: {
        ...data?.contact,
        [key]: value,
      },
    });
  };

  return (
    <form className="Contact">
      {inputFields.map(({ label, placeholder, type, key }) => (
        <Input
          key={key}
          label={label}
          placeholder={placeholder}
          type={type}
          data={data.contact}
          handleInput={handleInput}
        />
      ))}
    </form>
  );
}

export default Contact;
