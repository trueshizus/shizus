import { useFont } from "@/contexts/font-context";
import CV from "@/public/cv.mdx";
import { cvMdxComponents } from "./cv-mdx-components";
export default function InteractiveCV() {
  const { currentFont } = useFont();
  return (
    <article
      className={`md:h-[297mm] md:w-[210mm] px-6 py-4 ${currentFont.className}`}
    >
      <CV components={cvMdxComponents} />
    </article>
  );
}
