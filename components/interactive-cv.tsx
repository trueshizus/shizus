import { useSettings } from "@/contexts/settings-context";
import CV from "@/public/cv.mdx";
import { cvMdxComponents } from "./cv-mdx-components";
export default function InteractiveCV() {
  const { currentFont } = useSettings();
  return (
    <article
      className={`md:min-h-[297mm] md:min-w-[210mm] px-6 py-4 ${currentFont.className}`}
    >
      <CV components={cvMdxComponents} />
    </article>
  );
}
