import Link from 'next/link';
import Image from 'next/image';

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
  image,
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
      <div className="aspect-[16/9] relative overflow-hidden bg-sand-light">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
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
