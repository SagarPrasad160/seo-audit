export const mapMetaData = (meta) => [
  {
    value: meta.internal_links_count,
    title: "Internal Links",
  },
  {
    value: meta.external_links_count,
    title: "External Links",
  },
  {
    value: meta.images_count,
    title: "Number of Images",
  },
  {
    value: meta.images_size,
    title: "Images Size",
  },
  {
    value: meta.scripts_count,
    title: "Scripts",
  },
  {
    value: meta.scripts_size,
    title: "Scripts Size",
  },
  {
    value: meta.content.plain_text_size,
    title: "Plain Text Size",
  },
  {
    value: meta.content.plain_text_rate,
    title: "Plain Text Rate",
  },
  {
    value: meta.content.plain_text_word_count,
    title: "Plain Text Word Count",
  },
  {
    value: meta.content.automated_readability_index,
    title: "Automated Readability Index",
  },
  {
    value: meta.content.coleman_liau_readability_index,
    title: "Coleman Liau Readability Index",
  },
  {
    value: meta.content.dale_chall_readability_index,
    title: "Dale Chall Readability Index",
  },
  {
    value: meta.content.flesch_kincaid_readability_index,
    title: "Flesch Kincaid Readability Index",
  },
  {
    value: meta.content.smog_readability_index,
    title: "Smog Readability Index",
  },
  {
    value: meta.content.description_to_content_consistency,
    title: "Description to Content Consistency",
  },
  {
    value: meta.content.title_to_content_consistency,
    title: "Title to Content Consistency",
  },
  {
    value: meta.content.meta_keywords_to_content_consistency,
    title: "Meta Keywords to Content Consistency",
  },
];

export const filterData = (data) => [
  {
    title: "Duplicate Title",
    value: data.duplicate_title,
    desciption:
      "Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.",
  },
  {
    title: "Duplicate Description",
    value: data.duplicate_description,
    desciption:
      "Duplicate meta descriptions are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.",
  },
  {
    title: "Duplicate Content",
    value: data.duplicate_content,
    desciption:
      "Duplicate content is bad for SEO. It confuses search engines and makes it harder to rank for specific keywords.",
  },
  {
    title: "Size",
    value: data.size,
    desciption:
      "The size of your page is too large. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "Cache Control",
    value: data.cache_control,
    desciption:
      "Your page does not have a cache control header. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "Canonical",
    value: data.checks.canonical,
    desciption:
      "Your page does not have a canonical tag. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "No H1 Tag",
    value: data.checks.no_h1_tag,
    desciption:
      "Your page does not have an H1 tag. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "HTTPS to HTTP Links",
    value: data.checks.https_to_http_links,
    desciption:
      "Your page has links to HTTP pages. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "Is 4xx Code",
    value: data.checks.is_4xx_code,
    desciption:
      "Your page has a 4xx status code. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "Is 5xx Code",
    value: data.checks.is_5xx_code,
    desciption:
      "Your page has a 5xx status code. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "Is Broken",
    value: data.checks.is_broken,
    desciption:
      "Your page has broken links. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "Low Content Rate",
    value: data.checks.low_content_rate,
    desciption:
      "Your page has a low content rate. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "Has Render Blocking Resources",
    value: data.checks.has_render_blocking_resources,
    desciption:
      "Your page has render blocking resources. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "Low Readability Rate",
    value: data.checks.low_readability_rate,
    desciption:
      "Your page has a low readability rate. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "Title Too Long",
    value: data.checks.title_too_long,
    desciption:
      "Your page has a title that is too long. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "No Image Alt",
    value: data.checks.no_image_alt,
    desciption:
      "Your page has images without alt tags. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "No Favicon",
    value: data.checks.no_favicon,
    desciption:
      "Your page does not have a favicon. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "Recursive Canonical",
    value: data.checks.recursive_canonical,
    desciption:
      "Your page has a recursive canonical tag. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "Is Orphan Page",
    value: data.checks.is_orphan_page,
    desciption:
      "Your page is an orphan page. This can negatively impact your page load speed and user experience.",
  },
  {
    title: "Web Server",
    value: data.server,
    desciption:
      "Server information is the information about the software that is running on the server. This can be used to determine the technology stack of a website.",
  },
  {
    title: "Title",
    value: data.meta.title,
    desciption:
      "The title tag is an HTML tag that is used to define the title of a webpage. This tag is displayed in the search results and is used by search engines to determine the topic of a page.",
  },
  {
    title: "Description",
    value: data.meta.description,
    desciption:
      "The description tag is an HTML tag that is used to define the description of a webpage. This tag is displayed in the search results and is used by search engines to determine the topic of a page.",
  },
  {
    title: "Canonical",
    value: data.meta.canonical,
    desciption:
      "The canonical tag is an HTML tag that is used to define the canonical URL of a webpage. This tag is used by search engines to determine the canonical URL of a page.",
  },
];
