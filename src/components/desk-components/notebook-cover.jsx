const CoverNotebook = ({ title }) => {
  return (
    <div className="relative h-60 w-full rounded-2xl bg-purple-500 text-purple-50">
      <h3 className="absolute bottom-0 p-4">{title}</h3>
    </div>
  );
};

export default CoverNotebook;
