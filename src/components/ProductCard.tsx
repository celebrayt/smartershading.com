import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export function ProductCard({ slug, name, tagline, description, image }: ProductCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-sand/30"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-sand-light">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
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
