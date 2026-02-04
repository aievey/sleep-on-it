const Notebook = ({ children, onSelect, data }) => {
  return (
    <div className="w-full hover:cursor-pointer" onClick={() => onSelect(data)}>
      {children}
    </div>
  );
};

export default Notebook;
