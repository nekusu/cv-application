import uniqid from 'uniqid';
import Form from "./Form";

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
  const { contact } = data;
  const handleInput = (key, value) => {
    setData({ ...data, contact: { ...contact, [key]: value } });
  };

  return (
    <Form
      className="Contact"
      inputFields={inputFields}
      data={contact}
      handleInput={handleInput}
    />
  );
}

export default Contact;
