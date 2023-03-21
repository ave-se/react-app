const Select = ({ children, className, name, value, onChange }) => {
  className = className ?? "";
  if (value !== "") {
    className += " active";
  }

  return (
    <select className={className} name={name} value={value} onChange={onChange}>
      {children}
    </select>
  );
};

export default Select;
