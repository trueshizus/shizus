import ActionIcon from "@/components/action-icon";
import Post from "@/components/post";
import Terminal from "@/components/terminal";
import fs from "fs";
import path from "path";

const directoryPath = path.join(process.cwd(), "entries");

const getPost = async () => {
  const posts: { filename: string; content: React.ReactElement }[] = [];
  try {
    const files = fs
      .readdirSync(directoryPath)
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

export default async function Page() {
  const posts = await getPost();

  return (
    <main className="md:py-12 py-4 px-2 grid place-items-center">
      <Terminal title="logs" actions={<ActionIcon icon="close" />}>
        {posts.map(({ filename, content }) => (
          <Post key={filename} filename={filename} content={content} />
        ))}
      </Terminal>
    </main>
  );
}
