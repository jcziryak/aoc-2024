import fs from "fs/promises";

export default async function day_three(file) {
  const data = (await fs.readFile(file)).toString();

  console.log(data);
}
