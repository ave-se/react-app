const Select = ({ children, name, value, onChange }) => {
  return (
    <select
      className={value !== "" && "active"}
      name={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default Select;
