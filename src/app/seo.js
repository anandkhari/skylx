const FALLBACK_URL = 'http://localhost:3000';

export function getSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const productionVercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const previewVercelUrl = process.env.VERCEL_URL;

  if (explicitUrl) {
    return explicitUrl.startsWith('http') ? explicitUrl : `https://${explicitUrl}`;
  }

  if (productionVercelUrl) {
    return `https://${productionVercelUrl}`;
  }

  if (previewVercelUrl) {
    return `https://${previewVercelUrl}`;
  }

  return FALLBACK_URL;
}

export const seoConfig = {
  siteName: 'Skylx',
  title: 'Skylx | Premium Global Export & Logistics Infrastructure',
  description:
    'Skylx connects verified suppliers to global markets with premium export logistics, commodity sourcing, quality control, and cross-border trade execution.',
  keywords: [
    'Skylx',
    'export company',
    'global logistics',
    'commodity export',
    'spice export',
    'supply chain management',
    'international trade',
    'quality verification',
    'cross-border logistics',
    'export infrastructure',
  ],
  ogImage: '/logo.jpeg',
  contactPhone: '+1 (800) 555-0199',
  locale: 'en_US',
};
