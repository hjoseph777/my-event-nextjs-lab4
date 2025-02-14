'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <button
          className="px-6 py-3 bg-foreground text-background rounded-full hover:bg-[#383838] transition-colors"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
