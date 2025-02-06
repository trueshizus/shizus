import ActionIcon from "@/components/action-icon";
import Terminal from "@/components/terminal";

export default function Page() {
  return (
    <main className="h-full py-4 px-2 grid place-items-center">
      <Terminal title="projects" actions={<ActionIcon icon="close" />}>
        <ul className="p-2">
          <li>wip</li>
        </ul>
      </Terminal>
    </main>
  );
}
