export default function Loading() {
  return (
    <>
      <div className="mt-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-3">
        <div className="rounded-md bg-zinc-900/60 px-8 py-3 backdrop-blur md:col-span-2">
          <h1 className="text-xl">Overview</h1>
          <div className="mt-4 grid w-full animate-pulse grid-cols-2 place-items-start gap-x-12 gap-y-6 pb-4 md:grid-cols-4">
            <div className="h-14 w-24 rounded bg-zinc-800" />
            <div className="h-14 w-24 rounded bg-zinc-800" />
            <div className="h-14 w-24 rounded bg-zinc-800" />
            <div className="h-14 w-24 rounded bg-zinc-800" />
            <div className="h-14 w-24 rounded bg-zinc-800" />
            <div className="h-14 w-24 rounded bg-zinc-800" />
            <div className="h-14 w-24 rounded bg-zinc-800" />
            <div className="h-14 w-24 rounded bg-zinc-800" />
          </div>
        </div>
        <div className="h-min rounded-md bg-zinc-900/60 px-8 py-3 backdrop-blur">
          <div className="flex animate-pulse flex-col gap-2">
            <div className="flex gap-2">
              <div className="h-6 w-6 rounded bg-zinc-800" />
              <div className="h-6 w-6 rounded bg-zinc-800" />
              <div className="h-6 w-6 rounded bg-zinc-800" />
              <div className="h-6 w-6 rounded bg-zinc-800" />
              <div className="h-6 w-6 rounded bg-zinc-800" />
              <div className="h-6 w-6 rounded bg-zinc-800" />
            </div>
            <div className="h-5 w-full rounded bg-zinc-800" />
            <div className="h-5 w-full rounded bg-zinc-800" />
          </div>
        </div>
      </div>
    </>
  );
}
