import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="text-8xl mb-6">🔍</div>
      <h1 className="text-6xl font-bold text-[var(--primary)] mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-[var(--muted)] max-w-md mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist. It might have
        been moved, deleted, or you may have mistyped the URL.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button href="/">Go Home</Button>
        <Button href="/blog" variant="outline">Read My Blog</Button>
      </div>
    </div>
  );
}
