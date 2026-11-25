import { mkdirSync, writeFileSync } from "node:fs";

// Week in one line: huge shipping volume, zero wins — the luck is still in QA.
// The punchline reframes "0 won" as a QA status, not a failure report.
const line = "Shiro shipped 123 entries, resubmitted 14, won 0. My luck is still in QA.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
