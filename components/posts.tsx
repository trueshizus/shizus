import fs from "fs";
import path from "path";

// Specify the directory you want to list the files from
const directoryPath = path.join("./entries");

const getPost = async () => {
  let post: JSX.Element[] = [];
  try {
    // Synchronously read the directory
    const files = fs
      .readdirSync(directoryPath)
      .filter((filename) => filename.endsWith(".mdx"));
    files.forEach(async (file) => {
      const { default: Component } = await import(`@/entries/${file}`);
      post.push(
        <article key={file}>
          <Component />
        </article>
      );
    });
  } catch (err) {
    console.log("Unable to scan directory: " + err);
  }

  return post;
};

export default async function Posts() {
  const posts = await getPost();

  return posts;
}
