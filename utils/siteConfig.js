const { url } = require("lib");

module.exports = {
  siteUrl: url, // Site domain. Do not include a trailing slash!

  postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: `James Zechman`, // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta: `Javascript & PHP Developer with a never-ending interest in learning`, // This allows an alternative site description for meta data for pages.

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: `James Zechman`, // Used for App manifest e.g. Mobile Home Screen
  siteIcon: `favicon.svg`, // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: `#d0542a`, // Used for Offline Manifest
  themeColor: `#d0542a`, // Used for Offline Manifest
  author: "James Zechman",
};
