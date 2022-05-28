import Input from "./Input";

function Form(props) {
  const {
    className,
    inputFields,
    data,
    setData,
  } = props;
  const handleInput = (key, value) => {
    setData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <form className={className}>
      {inputFields.map(({ label, placeholder, type, key }) => (
        <Input
          key={key}
          label={label}
          placeholder={placeholder}
          type={type}
          data={data}
          handleInput={handleInput}
        />
      ))}
    </form>
  );
}

export default Form;
