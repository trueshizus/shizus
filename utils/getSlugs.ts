import fs from "fs";
import path from "path";

export function getSlugs(dir: string) {
  return fs
    .readdirSync(path.join(process.cwd(), dir))
    .filter((file) => file.endsWith(".mdx"))
    .map((slug) => ({ slug: slug.replace(".mdx", "") }))
}
