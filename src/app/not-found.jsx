import Link from "next/link";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p
          className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--accent)" }}
        >
          404
        </p>

        <h1 className="text-6xl md:text-8xl font-black mb-6">Page Not Found</h1>

        <p className="text-lg mb-10" style={{ color: "var(--muted)" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 rounded-xl font-semibold transition hover:scale-105"
          style={{
            background: "var(--accent)",
            color: "#fff",
          }}
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
