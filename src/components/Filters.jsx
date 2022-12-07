const Filters = ({ filter, setFilter }) => {
  return (
    <div className="w-full h-14 bg-secondary my-4 rounded-md flex items-center justify-center gap-4 font-bold">
      <button
        onClick={() => setFilter("all")}
        className={filter === "all" ? "text-accent" : "text-secondary"}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={filter === "active" ? "text-accent" : "text-secondary"}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={filter === "completed" ? "text-accent" : "text-secondary"}
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;
