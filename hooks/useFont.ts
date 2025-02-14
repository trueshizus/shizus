import { fonts } from "@/lib/fonts";
import { useQueryState } from "nuqs";

export default function useFont() {
  return useQueryState("font", {
    defaultValue: "Space Mono" as keyof typeof fonts,
    parse: (value: string) => value as keyof typeof fonts,
  });
}
