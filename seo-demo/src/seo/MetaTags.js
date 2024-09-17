// import React from 'react'
import { Helmet } from "react-helmet-async";

const MetaTags = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
  </Helmet>
);

export default MetaTags;

// Axels fråga
// 1. Twitter Cards:
{
  /* <meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Min fantastiska webbplats" />
<meta name="twitter:description" content="Det här är en fantastisk webbplats full av underbart innehåll." />
<meta name="twitter:image" content="https://minwebbplats.se/bild.jpg" /> */
}

// 2 Schema.org (Structured Data):
{
  /* <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Rubrik för artikeln",
  "image": "https://minwebbplats.se/bild.jpg",
  "description": "Beskrivning av artikeln",
  "author": {
    "@type": "Person",
    "name": "Författarens namn"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Webbplatsnamn",
    "logo": {
      "@type": "ImageObject",
      "url": "https://minwebbplats.se/logotyp.jpg"
    }
  }
}
</script> */
}
