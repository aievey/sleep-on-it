const Notes = ({ data, onSelect }) => {
  return (
    <>
      {data.map((note) => (
        <div
          key={note.id}
          className="bg-white hover:cursor-pointer"
          onClick={() => onSelect(note.title)}
        >
          {note.title}
        </div>
      ))}
    </>
  );
};

export default Notes;
