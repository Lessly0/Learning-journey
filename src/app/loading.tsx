export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-[var(--border)] border-t-[var(--primary)] animate-spin" />
        <p className="text-[var(--muted)] text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
