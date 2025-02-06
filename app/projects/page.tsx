import MenuLink from "@/components/menu-link";
import Terminal from "@/components/terminal";

export default function Page() {
  return (
    <main className="h-full py-4 px-2 grid place-items-center">
      <Terminal title="projects" actions={<MenuLink />}>
        <ul className="p-2">
          <li>wip</li>
        </ul>
      </Terminal>
    </main>
  );
}
