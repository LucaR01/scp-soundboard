<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import TopBar from "$lib/components/TopBar.svelte";
  import SoundPanel from "$lib/components/SoundPanel.svelte";
  import SubtitleBar from "$lib/components/SubtitleBar.svelte";
  import CassiePanel from "$lib/components/CassiePanel.svelte";
  import IntercomPanel from "$lib/components/IntercomPanel.svelte";
  import Settings from "$lib/components/Settings.svelte";

  import "$lib/styles/global.css";

  let name = $state("");
  let greetMsg = $state("");

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<!-- <div class="layout">
  <TopBar />
  <SoundPanel />
  <SubtitleBar />
  <CassiePanel />
  <IntercomPanel />
  <Settings />
</div> -->

<style>

</style>
