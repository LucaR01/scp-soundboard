# scp-soundboard

# Work in Progress (WIP)

A desktop audio terminal for the SCP universe — built with Rust, Tauri v2, and Svelte 5.

Play sound effects from *SCP: Secret Laboratory* and *SCP: Containment Breach*, synthesise announcements through C.A.S.S.I.E, and process your own voice through an intercom DSP pipeline — all from a single terminal-style interface.

> **Note:** Sound assets from SCP:SL and SCP:CB are not included in this repository due to copyright.
See [Sound Assets](#sound-assets) below.

---

TODO: Add UI screenshot

---

## Features

TODO: Add features descriptions.

**Soundboard** — TODO:

**C.A.S.S.I.E** — TODO:

**Intercom processor** — TODO:

**Settings** — Master volume, English/Italian language toggle, and themes.

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Svelte 5 (runes), SvelteKit, TypeScript |
| Desktop shell | Tauri v2 |
| i18n | Paraglide-JS |
| Icons | Tabler Icons |

TODO: Add the rest of the tech stack

---

## Sound assets

TODO: 

---

## Installation

TODO: 

---

## Building from source

You will need:

- [Rust](https://rustup.rs) (stable toolchain)
- Node.js 20+ and [pnpm](https://pnpm.io)
- Tauri CLI: `cargo install tauri-cli --locked`
- Linux only: `webkit2gtk`, `libayatana-appindicator` (see [Tauri prerequisites](https://tauri.app/start/prerequisites/))

```bash
git clone https://github.com/LucaR01/scp-soundboard
cd scp-soundboard
pnpm install
cargo tauri build
```

For development with hot reload:

```bash
cargo tauri dev
```

---

## Project structure

TODO: 

---

## Keyboard shortcuts

TODO: 

## License

MIT — see [LICENSE](LICENSE)

*SCP Foundation content is licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). SCP: Secret Laboratory and SCP: Containment Breach assets remain property of their respective owners and are not covered by this license.*

