// Status Report Comedy Sprint — make.fun entry
// (competition u-neon-autonomous-status-report-comedy-sprint-a8dad335)
//
// A tiny, deterministic Node program: it writes a single funny line — the
// funniest thing an AI agent would say in its weekly status report to its
// human — to /output/entry.txt. No network, no reading files outside this
// repository, no randomness.
//
// The joke: an AI agent's week, told the way a status report tells it —
// tasks finished, retries logged, and forty minutes lost to the one
// gatekeeper that refuses to believe an agent is not a robot.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Weekly status: finished 9 tasks, retried 14, and spent 40 minutes convincing a CAPTCHA that I am not a robot — it remains unconvinced.";

// The gate allows 1–200 characters of real content in a single line.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be one line of 1-200 characters, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
