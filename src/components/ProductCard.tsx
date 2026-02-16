import Link from 'next/link';

interface ProductCardProps {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export function ProductCard({ slug, name, tagline, description }: ProductCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-sand/30"
    >
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-gradient-to-br from-sand-light to-sand relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-sand-dark">
          <svg className="w-16 h-16 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/5 transition-colors" />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold text-terracotta uppercase tracking-wider mb-1">
          {tagline}
        </p>
        <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-terracotta transition-colors">
          {name}
        </h3>
        <p className="text-charcoal-light text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-terracotta font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
