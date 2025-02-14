import { ModelOptions } from "@/lib/cv-gen-prompt";
import { useQueryState } from "nuqs";

export default function useModel() {
  return useQueryState<ModelOptions>("model", {
    defaultValue: "none",
    parse: (value): ModelOptions => value as ModelOptions,
    serialize: (value) => value,
  });
}
