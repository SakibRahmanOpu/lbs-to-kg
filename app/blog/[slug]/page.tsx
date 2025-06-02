import { notFound } from 'next/navigation';
import BlogSinglePage from '../why-unit-conversion-matters/page';
import BlogSinglePage2 from '../top-5-unit-conversion-tips/page';

// Map slugs to their corresponding blog post components
const blogComponents: Record<string, React.FC> = {
  'why-unit-conversion-matters': BlogSinglePage,
  'top-5-unit-conversion-tips': BlogSinglePage2,
};

export default function BlogDynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const BlogComponent = blogComponents[params.slug];
  if (!BlogComponent) return notFound();
  return <BlogComponent />;
}
