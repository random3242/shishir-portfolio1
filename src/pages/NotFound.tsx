import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
      <div className="max-w-md text-center px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-purple-600 mb-4">404</div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h1>
          <p className="text-lg text-slate-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Button
          onClick={() => window.location.href = '/'}
          className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold"
        >
          <Home className="w-4 h-4 mr-2" />
          Go Home
        </Button>
      </div>
    </div>
  );
}