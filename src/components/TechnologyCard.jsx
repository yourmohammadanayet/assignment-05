function TechnologyCard({ technology, handleAdd, isAdded }) {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  return (
    <div className="flex min-h-[284px] flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <div>
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center">
            <img
              src={icon}
              alt={name}
              className="h-7 w-7 object-contain"
            />
          </div>

          <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-500">
            {badge}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-slate-900">
          {name}
        </h3>

        <p className="mt-1 min-h-[58px] text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between border-t border-slate-50 pt-3 text-[11px]">
          <span className="rounded bg-slate-100 px-2 py-1 font-medium text-slate-600">
            {category}
          </span>

          <span className="text-slate-500">
            {difficulty}
          </span>

          <span className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="text-amber-400">★</span>
            {rating}
          </span>
        </div>

        <button
          onClick={() => handleAdd(technology)}
          disabled={isAdded}
          className={`mt-4 w-full rounded-lg py-2.5 text-xs font-medium transition ${
            isAdded
              ? "cursor-not-allowed bg-slate-200 text-slate-500"
              : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;