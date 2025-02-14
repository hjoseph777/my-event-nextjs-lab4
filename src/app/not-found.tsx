import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg">The page you're looking for doesn't exist.</p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-foreground text-background rounded-full hover:bg-[#383838] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
