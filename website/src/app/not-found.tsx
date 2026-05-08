import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-2 font-heading text-4xl font-bold">Page Not Found</h1>
        <p className="mt-4 text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-secondary px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
