import register from "@babel/register";
// import { Sitemap } from "react-router-sitemap";
import routes from "./sitemap-routes.js";

import pkg from "react-router-sitemap";

console.log("pkg-------------", pkg); // Lägg till detta för att se vad som exporteras

// const { Sitemap } = pkg;

// const { default: Sitemap } = pkg;
// const { sitemapBuilder: SitemapBuilder } = pkg;
const { default: SitemapBuilder } = pkg;

// register("@babel/register")({
//   presets: ["@babel/preset-env", "babel/preset-react"],
// });
register({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

function generateSitemap() {
  //   return new SitemapBuilder(routes)
  //     .build("https://example.com")
  //     .save("./public/sitemap.xml");
  const sitemap = new SitemapBuilder(routes)
    .applyParams({})
    .build("https://example.com")
    .save("./public/sitemap.xml");

  return sitemap;
}

generateSitemap();
