function LoadingSpinner() {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-3">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"></div>

      <p className="text-sm text-slate-500">
        Loading technologies...
      </p>
    </div>
  );
}

export default LoadingSpinner;