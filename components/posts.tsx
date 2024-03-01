import fs from "fs";
import path from "path";

const directoryPath = path.join("./entries");

const getPost = async () => {
  let posts: JSX.Element[] = [];
  try {
    const files = fs
      .readdirSync(directoryPath)
      .filter((filename) => filename.endsWith(".mdx"));

    for (const file of files) {
      const { default: Component } = await import(`@/entries/${file}`);
      posts.push(
        <article key={file}>
          <Component />
        </article>
      );
    }
  } catch (err) {
    console.log("Unable to scan directory: " + err);
  }

  return posts.reverse();
};

export default async function Posts() {
  const posts = await getPost();

  return posts;
}
