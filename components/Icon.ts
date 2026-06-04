import { icons as carbon } from "@iconify-json/carbon";
import { icons as fa, type IconifyJSON } from "@iconify-json/fa";
import { icons as ion } from "@iconify-json/ion";
import { html, unsafeInnerHtml } from "@mastrojs/mastro";

interface Props {
  name: string;
  alt?: string;
}

const collections: Record<string, IconifyJSON> = {
  fa,
  carbon,
  ion,
};

export const Icon = ({ name, alt = `icon ${name}` }: Props) => {
  const [colName = "fa", iconName = "home"] = name.split(":");
  const collection = collections[colName];
  const icon = collection?.icons[iconName];
  if (!icon) {
    throw new Error(`Icon ${name} not found`);
  }
  const width = icon.width ?? collection.width ?? 512;
  const height = icon.height ?? collection.height ?? 512;

  return html`<svg class="icon" alt="${alt}" viewBox="0 0 ${width} ${height}">
    ${unsafeInnerHtml(icon.body)}
  </svg>`;
};
