function Button(props) {
  const {
    icon,
    label,
    title,
    alt,
    handleClick,
    iconPosition = 'left',
    className = '',
    type = 'button',
  } = props;

  return (
    <button
      className={`Button ${className} ${alt ? 'alt' : ''}`}
      type={type}
      title={title}
      onClick={handleClick}
    >
      {iconPosition === 'left' && icon}
      {label}
      {iconPosition === 'right' && icon}
    </button>
  );
}

export default Button;
