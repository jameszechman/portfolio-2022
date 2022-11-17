import React from "react";
import url from "url";

import config from "../../utils/siteConfig";
import ArticleMeta from "./ArticleMeta";
import WebsiteMeta from "./WebsiteMeta";
import { useRouter } from "next/router";

/**
 * MetaData will generate all relevant meta data information incl.
 * JSON-LD (schema.org), Open Graph (Facebook) and Twitter properties.
 *
 */
const MetaData = ({ data, settings, title, description, image }) => {
  const location = useRouter();
  const isTag = location.asPath.split("/").includes("tag");
  const isPost = location.asPath.split("/").includes("posts");
  const canonical = url.resolve(config.siteUrl, location.asPath);

  if (isPost) {
    return (
      <ArticleMeta data={data} settings={settings} canonical={canonical} />
    );
  } else if (isTag) {
    return (
      <WebsiteMeta
        data={data}
        settings={settings}
        canonical={canonical}
        type='Series'
      />
    );
  } else {
    title = title || settings.title || config.siteTitleMeta;
    description =
      description || settings.description || config.siteDescriptionMeta;
    image = image || settings.cover_image || null;

    image = image ? url.resolve(config.siteUrl, image) : null;

    return (
      <WebsiteMeta
        data={{}}
        settings={settings}
        canonical={canonical}
        title={title}
        description={description}
        image={image}
        type='WebSite'
      />
    );
  }
};

MetaData.defaultProps = {
  data: {},
};

export default MetaData;
