import { readFileToString } from "../../utils/readFile";
import path from "path";

const { env } = process.env;

async function main() {
  const input = await readFileToString(
    path.join(
      path.join(__dirname, "inputs"),
      env === "test" ? "sample_input.txt" : "input.txt"
    )
  );

  if (input) {
    const parentheses = input.split("");
    const floor = findFloor(parentheses);
    console.log("Part A:", floor);
    const characterPosition = findFirstBasementPosition(parentheses);
    console.log("Part B:", characterPosition);
  }
}

function findFloor(parentheses: string[]): number {
  let floor = 0;

  parentheses.forEach((value) => {
    if (value === "(") {
      ++floor;
    } else if (value === ")") {
      --floor;
    } else {
      // we do not understand this character. Skip :)
    }
  });
  return floor;
}

function findFirstBasementPosition(parentheses: string[]): number {
  let floor = 0;
  let characterPosition: number = 0;

  parentheses.every((value, position) => {
    if (value === "(") {
      ++floor;
    } else if (value === ")") {
      --floor;
    } else {
      // we do not understand this character. Skip :)
    }

    if (floor === -1) {
      characterPosition = position;
      return false;
    }
    return true;
  });

  return characterPosition + 1;
}

main();
