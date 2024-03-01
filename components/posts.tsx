import fs from "fs";
import path from "path";
import React from "react";

const directoryPath = path.join("./entries");

const getPost = async () => {
  let posts: { filename: string; content: React.ReactElement }[] = [];
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

export default async function Posts() {
  const posts = await getPost();

  return posts.map(({ filename, content }) => (
    <article key={filename} className="bg-zinc-300 px-8 py-4">
      <small>{filename.split(".")[0]}</small>
      {content}
    </article>
  ));
}
