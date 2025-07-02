"use server";
import MenuLink from "@/components/menu-link";
import Post from "@/components/post";
import Terminal from "@/components/terminal";
import fs from "fs";
import path from "path";

const logsPath = path.join(process.cwd(), "entries");

const getLogs = async () => {
  const posts: { filename: string; content: React.ReactElement }[] = [];
  try {
    const files = fs
      .readdirSync(logsPath)
      .filter((filename) => filename.endsWith(".mdx"));

    for (const file of files) {
      const { default: Component } = await import(`@/entries/${file}`);
      posts.push({ filename: file, content: <Component /> });
    }
  } catch (err) {
    console.log("Unable to scan directory: " + err);
  }

  return posts.reverse();
};

export default async function Home() {
  const logs = await getLogs();

  return (
    <main className="md:py-12 py-4 px-2 grid place-items-center">
      <Terminal title="logs" actions={<MenuLink />}>
        {logs.map(({ filename, content }) => (
          <Post key={filename} filename={filename} content={content} />
        ))}
      </Terminal>
    </main>
  );
}
