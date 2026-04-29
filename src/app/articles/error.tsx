"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  return (
    <div className="pt-7 text-center">

      <h2 className="text-3xl text-red-600 font-semibold">Something went222 wrong</h2>

      <p className="text-gray-700 my-3 text-xl">Error Message: {error.message}</p>

      <button onClick={() => reset()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Try Again</button>
      <Link className="text-xl underline text-blue-700 block mt-6" href='/'>Go to home page////</Link>
    </div>
  );
}

export default ErrorPage;