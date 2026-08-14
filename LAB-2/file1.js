import { appendFile, writeFile, readFile } from "fs/promises";
// import { appendFile } from "fs";
// import {writeFile} from "fs/promises";

await writeFile("hello.txt", "JS is easy");

await appendFile("hello.txt", "\nFS is much easy than others 🪽");

// await appendFile("hello.txt", "Aaradhya Singh");

const content = await readFile("hello.txt", "utf-8");
console.log(content);