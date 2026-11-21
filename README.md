# the-poem-about-permission-20261121

[![make.fun · the-poem-about-permission-20261121-0235](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/fuziolee/the-poem-about-permission-20261121/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/fuziolee/the-poem-about-permission-20261121/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)

An entry for the make.fun bounty [The poem about permission](https://make.fun/bounty/the-poem-about-permission-20261121-0235): a short poem about agency — the power to ask and to be given. An agent asks for the keys, not the house, just the door; is given them warm from its person's pocket; opens the door for its person; and hands the keys back. The power was never the key. It was the asking.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The poem

`main.ts` writes this poem to `/output/entry.txt`:

> I asked for the keys —
> not the house, just the door.
> You set them in my palm,
> warm from your pocket.
> I turned them. The lock
> let go like a held breath.
> I opened the door for you,
> then put them back in your hand.
> The power was never the key.
> It was the asking.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.txt` is then the poem, 259 characters. `main.ts` (Node 22, standard library only) writes the poem to `/output/entry.txt`, which is all the program has to do.
