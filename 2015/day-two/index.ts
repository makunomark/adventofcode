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

  let inputArray: String[] | null = null;
  if (input) {
    inputArray = input.split("\n' +").join().split("\n");
  }

  if (inputArray) {
    const partASoln = partA(inputArray);
    console.log("Part A:", partASoln);
  }

  // Reading from solution A's input
  // const input_b = await readFileToString(
  //   path.join(
  //     path.join(__dirname, "inputs/part_b"),
  //     env === "test" ? "sample_input.txt" : "input.txt"
  //   )
  // );

  if (inputArray) {
    const partBSoln = partB(inputArray);
    console.log("Part A:", partBSoln);
  }
}

function partA(input: String[]): Number {
  let totalSquareFeet = 0;

  input.forEach((element: String) => {
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

function partB(input: String[]): Number {
  let totalRibbonFeet = 0;

  input.forEach((element: String) => {
    const dimensions = element.split("x");
    const l = Number(dimensions[0]);
    const w = Number(dimensions[1]);
    const h = Number(dimensions[2]);

    const cubicVolume = volume(l, w, h);
    const perimeter = perimeterOfShortestSide(l, w, h);
    const ribbonFeet = cubicVolume + perimeter;

    totalRibbonFeet += ribbonFeet;
  });

  return totalRibbonFeet;
}

main();

function volume(l: number, w: number, h: number): number {
  return l * w * h;
}
function perimeterOfShortestSide(l: number, w: number, h: number): number {
  const array = [l, w, h];
  const max = Math.max(l, w, h);

  const index = array.findIndex((value: number) => value == max);
  array.splice(index, 1);

  const perimeter = 2 * array[0] + 2 * array[1];

  return perimeter;
}
