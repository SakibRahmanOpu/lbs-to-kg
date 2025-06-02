import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | LbstoKg.org',
  description:
    'Read expert articles about unit conversion, tips, tools, and its importance in daily life and science.',
  keywords:
    'unit conversion blog, lbs to kg, best unit converter, science unit conversion, digital tools',
};

async function getBlogs() {
  const filePath = path.join(process.cwd(), 'app', 'blog-data.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-emerald-800">
        Unit Conversion Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog: any) => (
          <div
            key={blog.id}
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
                href={`/blog/${blog.id}`}
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
