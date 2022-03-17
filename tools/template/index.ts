import { readFileToString } from "../../utils/readFile";
import path from "path";

const { env } = process.env;

async function main() {
  const input = await readFileToString(
    path.join(
      path.join(__dirname, "inputs/part_a"),
      env === "test" ? "sample_input.txt" : "input.txt"
    )
  );

  if (input) {
    // const partASoln = partA(input);
  }

  const input_b = await readFileToString(
    path.join(
      path.join(__dirname, "inputs/part_b"),
      env === "test" ? "sample_input.txt" : "input.txt"
    )
  );

  if (input_b) {
    // const partBSoln = partB(input);
  }
}

function partA(args: any): any {}

function partB(args: any): any {}

main();
