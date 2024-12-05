import fs from "fs/promises";

export async function day_two(file) {
  const data = (await fs.readFile(file)).toString();

  const reports = data.split("\n");

  let safeReports = 0;
}

// each line of input is a report
// each report constains a series of levels

// report is safe if (both must be true)
//     levels are all increasing or decreasing
//     adjadcent levels are 1 - 3 apart

// sample data

// 7 6 4 2 1 - All levels are decreasing by 1 - 3. Safe
// 1 2 7 8 9 - All levels increasing, but 2 to 7 is an increase of 5. Unsafe
// 9 7 6 2 1 - All levels decreasing, but 6 to 2 is a jump of 4. Unsafe
// 1 3 2 4 5 - Increases and decreases. Unsafe
// 8 6 4 4 1 - All decreasing, but adjacent values don't differ by at least 1. Unsafe
// 1 3 6 7 9 - Increasing and all deltas are valid. Safe.
