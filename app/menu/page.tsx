import Terminal from "@/components/terminal";

export default function Page() {
  return (
    <main className="h-full grid place-content-center relative">
      <Terminal title="menu" href="/">
        <form className="flex flex-col p-4 min-w-[200px]">
          <div className="group has-[:checked]:bg-zinc-200 has-[:checked]:text-zinc-900">
            <input
              id="logs"
              type="radio"
              name="menu"
              value="logs"
              className="appearance-none"
              autoFocus
              defaultChecked
            />
            <label htmlFor="logs">logs</label>
          </div>
          <div className="group has-[:checked]:bg-zinc-200 has-[:checked]:text-zinc-900">
            <input
              id="projects"
              type="radio"
              name="menu"
              value="projects"
              className="appearance-none"
            />
            <label htmlFor="projects">projects</label>
          </div>
          <div className="group has-[:checked]:bg-zinc-200 has-[:checked]:text-zinc-900">
            <input
              id="cv"
              type="radio"
              name="menu"
              value="cv"
              className="appearance-none"
            />
            <label htmlFor="cv">CV</label>
          </div>
        </form>
      </Terminal>
    </main>
  );
}
