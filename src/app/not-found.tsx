/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 font-bold text-4xl">404 - Page Not Found</h1>
      <p className="mb-4">
        The page you're looking for doesn't exist or you've entered an invalid
        store.
      </p>
      <Link className="text-blue-500 hover:underline" href="/">
        Go back to store selection
      </Link>
    </div>
  );
}
