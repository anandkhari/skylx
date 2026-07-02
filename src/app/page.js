import LandingPageClient from './components/LandingPageClient';
import { seoConfig, getSiteUrl } from './seo';

export const metadata = {
  alternates: { canonical: '/' },
};

export default function Page() {
  const siteUrl = getSiteUrl();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Skylx',
        url: siteUrl,
        logo: { '@type': 'ImageObject', url: `${siteUrl}/logo.jpeg` },
        description: seoConfig.description,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: seoConfig.contactPhone,
          contactType: 'customer service',
          areaServed: 'Worldwide',
          availableLanguage: 'English',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ward 17, Building No. 357, Karolkuniyil',
          addressLocality: 'Ulliyeri, Kozhikode',
          addressRegion: 'Kerala',
          postalCode: '673620',
          addressCountry: 'IN',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Skylx',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPageClient />
    </>
  );
}
