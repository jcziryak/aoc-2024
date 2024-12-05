import { readFile } from "fs/promises";

import type { PathLike } from "fs";

const path = "./day04/input.txt";
const file = await readFile(path, { encoding: "utf-8" });
const contents = file.split("\n");

const needle = "XMAS";

class Point {
  x = 0;
  y = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function compareToNeedle(
  currentPosition: Point,
  needle: string,
  currentIndex: number
): boolean {
  if (getCharacterAtPosition(currentPosition) != needle[currentIndex]) {
    return false;
  }
  return compareToNeedle(currentPosi);
}

function getCharacterAtPosition(currentPosition: Point) {
  console.log(
    `Character at ${currentPosition.x}, ${currentPosition.y}: `,
    contents[currentPosition.x][currentPosition.y]
  );
  return contents[currentPosition.x][currentPosition.y];
}

function moveToNextPosition(currentPosition: Point, contents: string[]): Point {
  if (
    currentPosition.x == contents[currentPosition.y].length - 1 &&
    currentPosition.y == contents.length - 1
  ) {
    throw Error("EOF");
  }

  if (currentPosition.x == contents[currentPosition.x].length - 1) {
    return { x: 0, y: currentPosition.y + 1 };
  }

  return { x: currentPosition.x + 1, y: currentPosition.y };
}

function checkNeighbors(currentPosition: Point) {
  // top
  if ((currentPosition.y = 0)) {
    console.log("Nothing to match above");
  } else {
    compareToNeedle(
      (currentPosition = { x: currentPosition.x, y: currentPosition.y + 1 }),
      needle,
      0
    );
  }
  // top right
  // right
  // bottom right
  // bottom
  // bottom left
  // left
  // top left
}

async function day04(path: PathLike) {
  const file = await readFile(path, { encoding: "utf-8" });

  const contents = file.split("\n");

  let currentPosition = new Point(0, 0);

  do {
    console.log("Current Position:", currentPosition.x, currentPosition.y);

    returnCurrentValue(contents, currentPosition);

    currentPosition = move(currentPosition, contents);
  } while (
    currentPosition.y < contents.length &&
    currentPosition.x < contents[contents.length - 1].length
  );
}

day04("./day04/input.txt");
