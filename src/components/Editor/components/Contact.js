import { useEffect, useState } from 'react';
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
  const [contact, setContact] = useState({ ...data.contact });

  useEffect(() => {
    setData(prevData => ({ ...prevData, contact }));
  }, [contact]);

  return (
    <Form
      className="Contact"
      inputFields={inputFields}
      data={contact}
      setData={setContact}
    />
  );
}

export default Contact;
