import fs from "fs";
import path from "path";
import React from "react";

const directoryPath = path.join("./app/logs/entries");

const getPost = async () => {
  let posts: { filename: string; content: React.ReactElement }[] = [];
  try {
    const files = fs
      .readdirSync(directoryPath)
      .filter((filename) => filename.endsWith(".mdx"));

    for (const file of files) {
      const { default: Component } = await import(`../app/logs/entries/${file}`);
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
    <article key={filename} className=" px-8 py-4 border-b border-zinc-200">
      <small>{filename.split(".")[0]}</small>
      {content}
    </article>
  ));
}
