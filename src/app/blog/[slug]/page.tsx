import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost } from '@/data/blog-posts';
import { buildMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTABanner } from '@/components/CTABanner';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { buildBlogPostSchema, buildFAQPageSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = post.relatedSlugs
    .map((s) => getBlogPost(s))
    .filter(Boolean);

  const formattedDate = new Date(post.datePublished).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      <SchemaMarkup schema={buildBlogPostSchema({
        title: post.title,
        slug: post.slug,
        description: post.metaDescription,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: post.author,
      })} />
      {post.faqs.length > 0 && (
        <SchemaMarkup schema={buildFAQPageSchema(post.faqs)} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` },
        ]} />
      </div>

      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <span className="text-terracotta font-semibold text-sm uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal-light">
              <span>{post.author}</span>
              <span>&middot;</span>
              <span>{formattedDate}</span>
              <span>&middot;</span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className="bg-sand-light rounded-xl p-6 mb-10" aria-label="Table of contents">
            <h2 className="font-bold text-navy mb-3 text-sm uppercase tracking-wider">
              In This Article
            </h2>
            <ol className="space-y-1.5">
              {post.tableOfContents.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-charcoal hover:text-terracotta transition-colors text-sm flex items-start gap-2"
                  >
                    <span className="text-charcoal-light">{i + 1}.</span>
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Content Sections */}
          <div className="prose-custom space-y-10">
            {post.content.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-2xl font-bold text-navy mb-4">{section.heading}</h2>
                <p className="text-charcoal-light leading-relaxed mb-4">{section.body}</p>
                {section.subsections?.map((sub, i) => (
                  <div key={i} className="ml-0 mt-6">
                    <h3 className="text-lg font-bold text-navy mb-2">{sub.heading}</h3>
                    <p className="text-charcoal-light leading-relaxed">{sub.body}</p>
                  </div>
                ))}
              </section>
            ))}
          </div>

          {/* FAQ Section */}
          {post.faqs.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
              <FAQAccordion items={post.faqs} />
            </section>
          )}

          {/* Author Bio */}
          <div className="mt-16 p-6 bg-sand-light rounded-xl flex gap-4 items-start">
            <div className="w-14 h-14 rounded-full bg-sand-dark shrink-0 flex items-center justify-center text-white font-bold text-lg">
              {post.author.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <p className="font-bold text-navy">{post.author}</p>
              <p className="text-sm text-charcoal-light leading-relaxed mt-1">{post.authorBio}</p>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-navy mb-6">Related Articles</h2>
              <div className="grid gap-4">
                {relatedPosts.map((related) => related && (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group flex gap-4 p-4 bg-white rounded-xl border border-sand/30 hover:border-terracotta/30 transition-colors"
                  >
                    <div className="w-20 h-16 relative rounded-lg shrink-0 overflow-hidden bg-sand-light">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-navy group-hover:text-terracotta transition-colors text-sm">
                        {related.title}
                      </p>
                      <p className="text-xs text-charcoal-light mt-1">{related.readingTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <CTABanner />
    </>
  );
}
