// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Kyne Santos';
export const SITE_DESCRIPTION = 'Mathematician, researcher, author, and science communicator.';

export const CV_URL = '';

export const CONTACT = {
  organization: 'Kyne Santos',
  addressLines: [
    'Toronto, Ontario',
  ],
  emails: [
    'onlinekyne@gmail.com',
  ],
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'twitter';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@onlinekyne',
    icon: 'website',
  },
  {
    label: 'Email',
    href: 'mailto:onlinekyne@gmail.com',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kmsantos/',
    icon: 'linkedin',
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/onlinekyne.bsky.social',
    icon: 'twitter',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Astro Scholar',
  designerUrl: 'https://github.com/shravanngoswamii/astro-scholar',
  sourceLabel: 'Source',
  sourceUrl: 'https://github.com/onlinekyne/onlinekyne.github.io',
};

// Umami analytics — configured via environment variables so no tracking ID is
// committed. Set PUBLIC_UMAMI_WEBSITE_ID (e.g. in a .env file or a CI variable)
// to enable it; leave it unset to disable analytics entirely.
export const UMAMI_SRC = import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js';
export const UMAMI_WEBSITE_ID = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '';
