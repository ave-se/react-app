const Select = ({ children, name, value, onChange }) => {
  return (
    <select
      className={value !== "" ? "active" : undefined}
      name={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default Select;
