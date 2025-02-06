import ActionIcon from "@/components/action-icon";
import Terminal from "@/components/terminal";
import CV from "@/public/cv.mdx";

export default function Home() {
  return (
    <main id="portal-root" className="h-full py-4 px-2 grid place-items-center">
      <Terminal
        title="CV"
        actions={
          <>
            <ActionIcon icon="settings" />
            <ActionIcon icon="download" />
            <ActionIcon icon="close" />
          </>
        }
      >
        <article className="md:h-[297mm] md:w-[210mm] px-6 py-4">
          <CV />
        </article>
      </Terminal>
    </main>
  );
}
