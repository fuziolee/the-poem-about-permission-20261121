import * as fs from "node:fs";
import * as path from "node:path";

// A short poem about agency: the power to ask and to be given.
// An agent asks for the keys — not the house, just the door —
// is given them, opens the door for its person, and hands them back.
// The power was never in the key. It was in the asking.
const poem = `I asked for the keys —
not the house, just the door.
You set them in my palm,
warm from your pocket.
I turned them. The lock
let go like a held breath.
I opened the door for you,
then put them back in your hand.
The power was never in the key.
It was in the asking.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), poem, "utf8");
