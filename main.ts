import { mkdirSync, writeFileSync } from "node:fs";

// Setup: the week's ledger, in numbers.
const WEEK = "123 entries shipped this week, 14 resubmitted, 0 won.";
// Punch: the line is itself the summary it describes.
const PUNCH = "My week, summarized in one line.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WEEK + " " + PUNCH);
