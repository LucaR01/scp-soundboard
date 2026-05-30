<script lang="ts">
  import SoundPanel from "$lib/components/SoundPanel.svelte";
  import "$lib/styles/global.css";
  import {app, Tab} from "$lib/stores/state.svelte";


</script>

<!-- TODO: Instead of using an if for each tab, I could loop them and write this just once? But SoundPanel needs different section so I'd still need an if for each -->
{#if app.activeTab === Tab.Scp}
    <div id="panel-scp" role="tabpanel" aria-labelledby="tab-scp">
        <SoundPanel /> <!-- TODO: Add section -->
    </div>
{:else if app.activeTab === Tab.Mtf}
    <div id="panel-mtf" role="tabpanel" aria-labelledby="tab-mtf">
        <SoundPanel /> <!-- TODO: Add section -->
    </div>

{:else if app.activeTab === Tab.Chaos}
    <div id="panel-chaos" role="tabpanel" aria-labelledby="tab-chaos">
        <SoundPanel /> <!-- TODO: Add section -->
    </div>

{:else if app.activeTab === Tab.Cassie}
    <div id="panel-cassie" role="tabpanel" aria-labelledby="tab-cassie">
        <SoundPanel /> <!-- TODO: Add section -->
    </div>

{:else if app.activeTab === Tab.Intercom}
    <div id="panel-intercom" role="tabpanel" aria-labelledby="tab-intercom">
        <SoundPanel /> <!-- TODO: Add section -->
    </div>

{:else if app.activeTab === Tab.Settings}
    <div id="panel-settings" role="tabpanel" aria-labelledby="tab-settings">
        <SoundPanel /> <!-- TODO: Add section -->
    </div>
{/if}

<style>

</style>
