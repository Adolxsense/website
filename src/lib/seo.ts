export const SITE = 'https://adolxsense.com';

/**
 * MusicBrainz artist entity.
 *
 * MusicBrainz already carries an "official homepage" relationship pointing at
 * this site; citing it back from our own sameAs closes the loop. Search engines
 * discount self-asserted identity, so a reciprocal link to a community-curated
 * database is what turns "this page claims to be Adolxsense" into a
 * corroborated entity — and it is the same identifier Wikidata (P434) and
 * Google's Knowledge Graph consume.
 */
export const MUSICBRAINZ_ARTIST =
  'https://musicbrainz.org/artist/4ef16ee6-3ee9-4477-8b28-4f3b611b158d';

/** Release group MBIDs resolve to a stable, citable MusicBrainz URL. */
export const musicbrainzRelease = (mbid: string) =>
  `https://musicbrainz.org/release-group/${mbid}`;

/**
 * Wikidata item for the band.
 *
 * Wikidata is the identifier Google reads most directly when assembling a
 * Knowledge Panel, so it leads the sameAs list.
 */
export const WIKIDATA_ARTIST = 'https://www.wikidata.org/wiki/Q140792772';

/**
 * Record labels as identified entities rather than bare name strings, keyed by
 * the label string used in releases.ts.
 *
 * Without these a label is just text that a crawler has to guess at; with them
 * it resolves to the same node every other database points to.
 */
export const LABEL_SAME_AS: Record<string, string[]> = {
  'TS Music Records': [
    'https://www.wikidata.org/wiki/Q140792937',
    'https://musicbrainz.org/label/a124057d-a1d5-4a5a-8b6f-bc0eb6a0da7c',
  ],
};

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
