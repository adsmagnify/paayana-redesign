import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-6xl font-bold mb-4 text-gray-900">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-gray-700">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/">
        <Button variant="primary">Go Back Home</Button>
      </Link>
    </div>
  );
}
