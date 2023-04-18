export function EmptyMessage() {
  return (
    <section className="mt-24 flex flex-col items-center gap-6">
      <span className="text-6xl">😕</span>
      <h1 className="mt-5 font-bold md:text-xl">No Definitions Found</h1>
      <p className="text-center text-sm text-gray-500 md:text-lg">
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
    </section>
  );
}
