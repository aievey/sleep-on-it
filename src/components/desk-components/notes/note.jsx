const Notes = ({ data }) => {
  return (
    <div>
      {data.map((note) => (
        <div key={note.id} className="bg-white">
          {note.title}
        </div>
      ))}
    </div>
  );
};

export default Notes;
