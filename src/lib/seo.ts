export const SITE = 'https://adolxsense.com';

/** The band as a linkable entity — reused so every schema points at one node. */
export const BAND = {
  '@type': 'MusicGroup',
  '@id': `${SITE}/#band`,
  name: 'Adolxsense',
  url: SITE,
};

/**
 * Clamp a meta description to roughly what Google renders, cutting on a word
 * boundary so it never ends mid-word.
 */
export function clampDescription(text: string, max = 155) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[.,;:—-]$/, '')}…`;
}

/**
 * BreadcrumbList for a page. Pass the trail without the site root — "Home" is
 * prepended. Breadcrumbs change how the URL itself renders in the SERP.
 */
export function breadcrumbs(trail: { name: string; path: string }[]) {
  const items = [{ name: 'Home', path: '/' }, ...trail];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

/** CollectionPage + ItemList for hub pages (/releases, /lyrics, /videos). */
export function collection(opts: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: opts.name,
    description: opts.description,
    url: `${SITE}${opts.path}`,
    isPartOf: { '@type': 'WebSite', name: 'Adolxsense', url: SITE },
    about: BAND,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: opts.items.length,
      itemListElement: opts.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: `${SITE}${item.path}`,
      })),
    },
  };
}
