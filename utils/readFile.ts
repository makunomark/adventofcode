import { readFile } from "fs/promises";

export async function readFileToString(path: string): Promise<string | null> {
  try {
    const buffer: Buffer = await readFile(path);
    return buffer.toString();
  } catch (err) {
    console.error(err);
    return null;
  }
}
