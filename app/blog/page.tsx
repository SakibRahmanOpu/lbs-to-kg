import Link from 'next/link';

const blogs = [
  {
    slug: 'why-unit-conversion-matters',
    title: 'Why Unit Conversion Matters in Everyday Life',
    summary:
      'Discover how unit conversion impacts daily activities, from cooking to travel, and why accuracy is essential.',
    date: '2025-06-01',
  },
  {
    slug: 'top-5-unit-conversion-tips',
    title: 'Top 5 Tips for Accurate Unit Conversion',
    summary:
      'Learn the best practices to avoid common mistakes and ensure precise conversions every time.',
    date: '2025-05-28',
  },
  {
    slug: 'digital-tools-for-unit-conversion',
    title: 'The Best Digital Tools for Unit Conversion in 2025',
    summary:
      'Explore the latest apps and websites that make unit conversion fast, easy, and reliable.',
    date: '2025-05-20',
  },
  {
    slug: 'unit-conversion-in-science',
    title: 'Unit Conversion in Science: Why It’s Critical',
    summary:
      'Understand the role of unit conversion in scientific research and how it ensures global collaboration.',
    date: '2025-05-15',
  },
];

export const metadata = {
  title: 'Blog | UnitConverters.net',
  description:
    'Read expert articles about unit conversion, tips, tools, and its importance in daily life and science.',
  keywords:
    'unit conversion blog, unit converter tips, best unit converter, science unit conversion, digital tools',
};

export default function BlogPage() {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-emerald-800">
        Unit Conversion Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div
            key={blog.slug}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-emerald-700">
                {blog.title}
              </h2>
              <p className="text-gray-700 mb-4">{blog.summary}</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-gray-500">
                {new Date(blog.date).toLocaleDateString()}
              </span>
              <Link
                href={`/blog/${blog.slug}`}
                className="text-emerald-600 font-semibold hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
