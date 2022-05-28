import camelCase from 'camelcase';

function Input(props) {
  const {
    label,
    placeholder,
    data,
    handleInput,
    value = '',
    id = camelCase(label || ''),
    type = 'text',
  } = props;

  return (
    <div className="Input">
      {label && <label htmlFor={id}>{label}</label>}
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={data?.[id] || value}
          onInput={e => handleInput(id, e.target.value)}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={id}
          placeholder={placeholder}
          value={data?.[id] || value}
          onInput={e => handleInput(id, e.target.value)}
        />
      )}
    </div>
  );
}

export default Input;
