<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import TopBar from "$lib/components/TopBar.svelte";
  import SoundsPanel from "$lib/components/SoundsPanel.svelte";
  import SubtitleBar from "$lib/components/SubtitleBar.svelte";
  import CassiePanel from "$lib/components/CassiePanel.svelte";
  import IntercomPanel from "$lib/components/IntercomPanel.svelte";

  let name = $state("");
  let greetMsg = $state("");

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<div class="layout">
  <TopBar />
  <SoundsPanel />
  <SubtitleBar />
  <CassiePanel />
  <IntercomPanel />
</div>

<style>

</style>
