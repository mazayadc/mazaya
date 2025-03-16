import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">404 - Page Not Found</h1>
        <p className="text-gray-600">The page you're looking for doesn't exist.</p>
        <Link href="/">
          <Button>
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
} 