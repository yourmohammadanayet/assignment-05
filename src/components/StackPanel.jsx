function StackPanel({ selectedTech, handleRemove, handleRemoveAll }) {
  return (
    <aside className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-28">
      <div>
        <h3 className="text-lg font-bold text-slate-900">
          Your Stack
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {selectedTech.length}{" "}
          {selectedTech.length === 1
            ? "Technology Selected"
            : "Technologies Selected"}
        </p>
      </div>

      <div className="mt-5 border-t border-slate-100 pt-5">
        {selectedTech.length === 0 ? (
          <div className="flex min-h-[180px] flex-col items-center justify-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-500">
              +
            </div>

            <p className="mt-4 text-sm font-semibold text-slate-700">
              Your stack is empty
            </p>

            <p className="mt-1 max-w-[210px] text-xs leading-5 text-slate-500">
              Add technologies from the list to build your development stack.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              {selectedTech.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-8 w-8 object-contain"
                    />

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">
                        {technology.name}
                      </h4>

                      <p className="text-xs text-slate-500">
                        {technology.category}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(technology.id)}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleRemoveAll}
              className="mt-5 w-full rounded-lg border border-slate-200 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  );
}

export default StackPanel;