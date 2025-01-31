import Terminal from "@/components/terminal";
import { redirect } from "next/navigation";

const handleSubmit = async (formData: FormData) => {
  "use server";
  const menu = formData.get("menu");
  redirect(`/${menu}`);
};

export default function Page() {
  return (
    <main className="h-full grid place-content-center relative">
      <Terminal title="menu" href="/">
        <form className="flex flex-col p-2 min-w-[300px]" action={handleSubmit}>
          <div className="group has-[:checked]:bg-zinc-200 has-[:checked]:text-zinc-900">
            <label htmlFor="cv" className="block">
              <input
                id="cv"
                type="radio"
                name="menu"
                value=""
                className="appearance-none"
                autoFocus
                defaultChecked
              />
              CV
            </label>
          </div>
          <div className="group has-[:checked]:bg-zinc-200 has-[:checked]:text-zinc-900">
            <label htmlFor="logs" className="block">
              <input
                id="logs"
                type="radio"
                name="menu"
                value="logs"
                className="appearance-none"
              />
              logs
            </label>
          </div>
          <div className="group has-[:checked]:bg-zinc-200 has-[:checked]:text-zinc-900">
            <label htmlFor="projects" className="block">
              <input
                id="projects"
                type="radio"
                name="menu"
                value="projects"
                className="appearance-none"
              />
              projects
            </label>
          </div>

          <input type="submit" hidden />
        </form>

        <div className="border solid border-zinc-200 text-xs border-b-0 flex justify-between px-2">
          <span>select:↑↓</span>
          <span>confirm: ↵</span>
        </div>
      </Terminal>
    </main>
  );
}
