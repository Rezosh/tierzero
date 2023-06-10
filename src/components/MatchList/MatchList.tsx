"use client";
import { useCallback, useMemo, useState } from "react";
import MatchStat from "./MatchStat";

export default function MatchList({ matches }: { matches: Match[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const renderMatchStat = useCallback(
    (match: Match) => <MatchStat key={match.id} match={match} />,
    []
  );

  const sliceMatches = useMemo(
    () => matches.slice((currentPage - 1) * 5, currentPage * 5),
    [matches, currentPage]
  );

  return (
    <div>
      {sliceMatches.map(renderMatchStat)}

      <nav
        className="flex items-center justify-between border-t border-zinc-50/5 bg-transparent px-4 py-3 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-zinc-400">
            Showing{" "}
            <span className="font-medium">{(currentPage - 1) * 5 + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(currentPage * 5, matches.length)}
            </span>{" "}
            of <span className="font-medium">{matches.length}</span> results
          </p>
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            aria-disabled={currentPage === 1}
            className="relative ml-3 inline-flex items-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-50 ring-1 ring-inset ring-zinc-50/5 hover:bg-zinc-900 focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            aria-disabled={currentPage * 5 >= matches.length}
            disabled={currentPage * 5 >= matches.length}
            className="relative ml-3 inline-flex items-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-50 ring-1 ring-inset ring-zinc-50/5 hover:bg-zinc-900 focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </nav>
    </div>
  );
}
