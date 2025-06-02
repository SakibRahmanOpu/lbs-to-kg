import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-6">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600">
        <p>© 2025 UnitConverters.net - All rights reserved</p>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Link href="/about-us" className="hover:underline">
            About Us
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/terms-of-use" className="hover:underline">
            Terms of Use
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
