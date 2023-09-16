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
