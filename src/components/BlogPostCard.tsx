import Link from 'next/link';

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  datePublished: string;
  image: string;
}

export function BlogPostCard({
  slug,
  title,
  excerpt,
  category,
  readingTime,
  datePublished,
}: BlogPostCardProps) {
  const formattedDate = new Date(datePublished).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-sand/30"
    >
      <div className="aspect-[16/9] bg-gradient-to-br from-sage/20 to-sand-light relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-sage/40">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold text-terracotta uppercase tracking-wider">
            {category}
          </span>
          <span className="text-xs text-charcoal-light">{readingTime}</span>
        </div>
        <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-terracotta transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-charcoal-light text-sm leading-relaxed line-clamp-2 mb-3">
          {excerpt}
        </p>
        <p className="text-xs text-charcoal-light">{formattedDate}</p>
      </div>
    </Link>
  );
}
