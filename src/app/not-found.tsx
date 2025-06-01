import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-gold p-8 text-center">
      <h1 className="text-5xl font-serif mb-4">Page Not Found</h1>
      <p className="text-lg mb-8">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="text-gold underline underline-offset-4 hover:opacity-80 transition duration-300"
      >
        Go back home
      </Link>
    </main>
  );
}
