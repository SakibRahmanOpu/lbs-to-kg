import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'app', 'blog-data.json');
  const data = await fs.readFile(filePath, 'utf-8');
  const blogs = JSON.parse(data);
  return blogs.map((blog: any) => ({ slug: blog.id }));
}

async function getBlog(slug: string) {
  const filePath = path.join(process.cwd(), 'app', 'blog-data.json');
  const data = await fs.readFile(filePath, 'utf-8');
  const blogs = JSON.parse(data);
  return blogs.find((blog: any) => blog.id === slug);
}

export default async function BlogSinglePage({ params }: any) {
  const blog = await getBlog(params.slug);
  if (!blog) return notFound();
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-emerald-800">{blog.title}</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800">
        <div className="mb-4 text-xs text-gray-500">
          {new Date(blog.date).toLocaleDateString()}
        </div>
        {blog.content.split('\n').map((p: string, i: number) => (
          <p className="mb-4" key={i}>
            {p}
          </p>
        ))}
      </div>
    </main>
  );
}
