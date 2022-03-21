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
    const partASoln = partA(input);
    console.log({ partASoln });
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

function partA(input: any): any {
  const inputArray = input.split("\n' +").join().split("\n");
  let totalSquareFeet = 0;

  inputArray.forEach((element: string) => {
    const dimensions = element.split("x");
    const l = Number(dimensions[0]);
    const w = Number(dimensions[1]);
    const h = Number(dimensions[2]);

    const area1 = l * w;
    const area2 = w * h;
    const area3 = l * h;

    const leastArea = Math.min(area1, area2, area3);
    const surfaceArea = 2 * area1 + 2 * area2 + 2 * area3;
    const total = leastArea + surfaceArea;
    totalSquareFeet += total;
  });

  return totalSquareFeet;
}

function partB(args: any): any {}

main();
