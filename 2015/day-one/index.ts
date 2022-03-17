import { readFileToString } from "../../utils/readFile";
import path from "path";

async function main() {
  const stringInput = await readFileToString(
    path.join(__dirname, "sample_input.txt")
  );
  console.log(stringInput);
}

main();
