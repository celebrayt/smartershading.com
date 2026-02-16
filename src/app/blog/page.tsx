import { blogPosts } from '@/data/blog-posts';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BlogPostCard } from '@/components/BlogPostCard';
import { CTABanner } from '@/components/CTABanner';

export const metadata = buildMetadata({
  title: 'Window Shade Blog & Guides',
  description: 'Expert guides on motorized shades, energy savings, smart home integration, and choosing the best window shades for Arizona homes.',
  path: '/blog',
});

export default function BlogIndexPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Expert Resources & Guides
          </h1>
          <p className="text-lg text-charcoal-light max-w-2xl mb-12">
            Practical advice from our shade specialists — pricing guides, product comparisons, energy savings tips, and smart home integration how-tos.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogPostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                readingTime={post.readingTime}
                datePublished={post.datePublished}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
