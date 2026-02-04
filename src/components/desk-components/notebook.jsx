const Notebook = ({ children, onSelect }) => {
  return (
    <div
      className="w-full hover:cursor-pointer"
      onClick={() => onSelect(children)}
    >
      {children}
    </div>
  );
};

export default Notebook;
