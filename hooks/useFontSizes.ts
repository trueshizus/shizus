import { defaultFontSizes } from "@/lib/fonts";

import { FontSizes } from "@/lib/fonts";
import { useQueryState } from "nuqs";

export default function useFontSizes() {
  return useQueryState("fontSizes", {
    defaultValue: defaultFontSizes,
    parse: (value: string) => JSON.parse(value) as FontSizes,
    serialize: (value: FontSizes) => JSON.stringify(value),
  });
}
