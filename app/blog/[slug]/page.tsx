// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import BlogSinglePage from '../why-unit-conversion-matters/page';
import BlogSinglePage2 from '../top-5-unit-conversion-tips/page';

// Map slugs to their corresponding blog post components
const blogComponents: Record<string, React.FC> = {
  'why-unit-conversion-matters': BlogSinglePage,
  'top-5-unit-conversion-tips': BlogSinglePage2,
};

// --- Add this function ---
export async function generateStaticParams() {
  // Get all the keys (slugs) from your blogComponents map
  const slugs = Object.keys(blogComponents);

  // Map them to the format Next.js expects: [{ slug: '...' }, { slug: '...' }]
  return slugs.map(slug => ({
    slug: slug,
  }));
}
// --- End of added function ---

export default function BlogDynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const BlogComponent = blogComponents[params.slug];

  // If the slug doesn't match any component, return 404
  if (!BlogComponent) {
    return notFound();
  }

  // Render the corresponding blog component
  return <BlogComponent />;
}
