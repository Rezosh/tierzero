"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { log } from "next-axiom";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an axiom
    log.error(`Error: ${error.name}`, error);
  }, [error]);

  return (
    <div>
      <div className="mt-4 rounded-md bg-red-400/30 px-8 py-3 font-medium text-red-400 ring-1 ring-inset ring-red-400/20">
        <h1 className="text-lg">
          Oops something went wrong. Please try again later.
        </h1>
        <div className="mt-4 overflow-auto text-sm text-red-400">
          {`${error.name}: ${error.message}`}
          {error.stack && (
            <details className="mt-2">
              <summary>Stack trace</summary>
              <pre className="mt-2 text-xs text-red-400">{error.stack}</pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}
