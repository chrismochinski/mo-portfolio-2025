import { Helmet } from 'react-helmet-async';
// import headshotSquare from '../assets/chris-mo-mochinski-headshot-square.png';
import ferrisWheelPreview from '../assets/mo-2025-preview.png';

interface PageHelmetProps {
  title?: string; // Page title
  description?: string; // Meta description
  keywords?: string[]; // Array for keywords to easily combine defaults and additional ones
  url?: string; // Page URL (for OG tags)
  image?: string; // Image for sharing (OG and Twitter)
}

// Default keywords
const defaultKeywords = [
  '2D animation',
  '3D animation',
  'animation from scratch',
  'animations',
  'CharacterStrong',
  'Chris Mo',
  'Chris Mochinski',
  'css animation',
  'ferris wheel',
  'ferris wheel animation',
  'ferris wheel icon',
  'ferris wheel svg',
  'front-end developer',
  'front-end effects',
  'graphic designer',
  'Harvestmen',
  'interactive design',
  'Junk FM',
  'kindness',
  'microinteractions',
  'Mo',
  'Mo Design',
  'Mo Design Studio',
  'Mochinski',
  'motion graphics',
  'mo mochinski',
  'portfolio',
  'Radda Radda',
  'readygoes',
  'special effects',
  'sesquipedalian',
  'svg animation',
  'UI',
  'UX',
  'web design',
  'web designer',
  'web developer',
  'web development',
  'webdev',
  'wreck shop',
  'Wreck Shop Media'
]


const defaultDescription =
  "The portfolio of full-stack developer Chris 'Mo' Mochinski. Featuring a whole bunch of modestly obsessive front-end effects, composed almost entirely from scratch, as well as maybe a few actual professional accolades maybe kinda possibly perhaps.";

export function PageHelmet({
  title,
  description,
  keywords = [], // Default to an empty array
  url = 'https://chrismochinski.com',
  image = ferrisWheelPreview,
}: PageHelmetProps) {
  // Combine default and additional keywords
  const combinedKeywords = [...defaultKeywords, ...keywords];

  return (
    <Helmet>
      <title>{title ? `Mo | ${title}` : "Hi, I'm Mo."}</title>
      <meta name="description" content={description || defaultDescription} />
      {combinedKeywords.length > 0 && (
        <meta name="keywords" content={combinedKeywords.join(', ')} />
      )}
      <meta name="author" content="Chris 'Mo' Mochinski" />
      {/* Open Graph Tags */}
      <meta property="og:title" content={title || 'Chris "Mo" Mochinski | Portfolio'} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Mo's Portfolio"} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
