import fs from "fs";
import path from "path";

// Specify the directory you want to list the files from
const directoryPath = path.join("./app/@logs");

const getPost = async () => {
  let post: JSX.Element[] = [];
  try {
    // Synchronously read the directory
    const files = fs.readdirSync(directoryPath).filter(filename => filename.endsWith('.mdx'))

    files.forEach(async file => {
      const { default: Component } = await import(`./${file}`);
      post.push( <Component key={file} />)
    })  

  } catch (err) {
    console.log("Unable to scan directory: " + err);
  }

  return post;
};

export default async function Page() {
  const posts = await getPost();
  return <>{posts}</>;
}
