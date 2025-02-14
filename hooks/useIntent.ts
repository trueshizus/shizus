import { StyleOptions } from "@/lib/cv-gen-prompt";
import { useQueryState } from "nuqs";

export default function useIntent() {
  return useQueryState<StyleOptions>("intent", {
    defaultValue: "short",
    parse: (value): StyleOptions => value as StyleOptions,
    serialize: (value) => value,
  });
}
