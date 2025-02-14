import { defaultFontSizes } from "@/lib/fonts";
import { useQueryStates } from "nuqs";

export default function useFontSizes() {
  return useQueryStates({
    h1: {
      defaultValue: defaultFontSizes.h1,
      parse: Number,
      serialize: String,
    },
    h2: {
      defaultValue: defaultFontSizes.h2,
      parse: Number,
      serialize: String,
    },
    h3: {
      defaultValue: defaultFontSizes.h3,
      parse: Number,
      serialize: String,
    },
    p: {
      defaultValue: defaultFontSizes.p,
      parse: Number,
      serialize: String,
    },
    li: {
      defaultValue: defaultFontSizes.li,
      parse: Number,
      serialize: String,
    },
  });
}
