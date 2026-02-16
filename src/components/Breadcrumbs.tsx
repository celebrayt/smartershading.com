import Link from 'next/link';
import { SchemaMarkup } from './SchemaMarkup';
import { buildBreadcrumbSchema } from '@/lib/schema';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: 'Home', href: '/' }, ...items];
  const schemaItems = allItems.map((item) => ({
    name: item.label,
    url: `https://smartershading.com${item.href}`,
  }));

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <SchemaMarkup schema={buildBreadcrumbSchema(schemaItems)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-charcoal-light">
        {allItems.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {index > 0 && (
              <span className="text-sand-dark" aria-hidden="true">/</span>
            )}
            {index === allItems.length - 1 ? (
              <span className="text-charcoal font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-terracotta transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
