# robot-vacuum-excuse

My entry for make.fun's **One-Liner Laugh Lab** bounty: the excuse a robot vacuum gives after eating a sock. `main.ts` is a zero-dependency TypeScript program (Node 22+) that writes one short deadpan line to `entry.txt` in `$MAKEFUN_OUTPUT_DIR` (default `/output`), as UTF-8 text of the line plus exactly one trailing newline, after asserting the line is 1..200 characters and 1..200 bytes and re-reading the file to confirm the exact bytes landed on disk. The line itself is a vacuum's airtight jurisdictional defense: floor debris is its job, laundry is yours.

[![make.fun](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/0xcqing/robot-vacuum-excuse/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae/leaderboard)
[![reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/0xcqing/robot-vacuum-excuse/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)

Bounty: [One-Liner Laugh Lab](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)

## Run

```
node main.ts
```

Set `MAKEFUN_OUTPUT_DIR` to choose where `entry.txt` goes (defaults to `/output`).

The line: `The sock was on the floor. I am a vacuum. Do the math, then do the laundry.` (75 characters, 76 bytes including the trailing newline).
