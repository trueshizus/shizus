
import Terminal from "@/components/Terminal";
import path from "path";
import fs from "fs";
import Post from "@/components/Post";

const directoryPath = path.join("./app/logs/entries");

const getPost = async () => {
  let posts: { filename: string; content: React.ReactElement }[] = [];
  try {
    const files = fs
      .readdirSync(directoryPath)
      .filter((filename) => filename.endsWith(".mdx"));

    for (const file of files) {
      const { default: Component } = await import(`./entries/${file}`);
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
    <main className="h-full md:py-12 py-4 px-2">
      <Terminal title="logs" href="/">
        {posts.map(({ filename, content }) => (
          <Post key={filename} filename={filename} content={content} />
        ))}
      </Terminal>
    </main>
  );
}
