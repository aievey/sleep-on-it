import { notebooks } from "@/library/notebooks";
const Notebook = ({ children, onSelect, data }) => {
  return (
    <div className="w-full hover:cursor-pointer" onClick={() => onSelect(data)}>
      {children}
    </div>
  );
};

const BookShelf = ({ data, onSelect }) => {
  return (
    <div className="flex h-full flex-col divide-y divide-stone-700 overflow-y-scroll p-6">
      {notebooks.map((book) => (
        <Notebook
          key={book.id}
          notes={book.notes}
          onSelect={onSelect}
          data={book}
        >
          {book.title}
        </Notebook>
      ))}
    </div>
  );
};

export default BookShelf;
