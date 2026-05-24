<script lang="ts">
    //TODO: TABS
</script>

<!-- TODO: Uncomment, remove undefined and implement functions -->
<nav class="tabs" role="tablist" aria-label="Sections">
    <!-- {#each TABS as tab} --> <!-- TODO: uncomment -->
        <button class="tab {undefined}" class:active={undefined} onclick={() => undefined} role="tab" aria-selected={undefined} aria-controls="panel {undefined}">
            <i class="ti {undefined}" aria-hidden="true"></i>

        </button>
    <!-- {/each} --> <!-- TODO: uncomment -->
</nav>

<style>
    .tabs {
        display: flex;
        gap: 4px;
        margin-bottom: .7rem;
        flex-wrap: wrap;
    }

    .tab {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 11px;
        padding: 5px 13px;
        border: .5px solid var(--border);
        border-radius: 7px;
        background: transparent;
        color: var(--text-sec);
        letter-spacing: .05em;
        transition: border-color .15s, color .15s, background .15s;
        white-space: nowrap;
    }

    .tab:hover {
        background: var(--surface-2);
        color: var(--text-pri);
        border-color: var(--border-md);
    }

    /* Active state per section accent */
    .tab.accent-scp.active      { border-color: var(--scp-border); color: var(--scp-text); background: var(--surface-1); }
    .tab.accent-mtf.active      { border-color: var(--mtf-border); color: var(--mtf-text); background: var(--surface-1); }
    .tab.accent-ci.active       { border-color: var(--ci-border);  color: var(--ci-text);  background: var(--surface-1); }
    .tab.accent-cassie.active   { border-color: var(--cassie-border);   color: var(--cassie-text);   background: var(--surface-1); }
    .tab.accent-intercom.active { border-color: var(--intercom-border); color: var(--intercom-text); background: var(--surface-1); }
    .tab.active:not([class*="accent-"]) {
        border-color: var(--border-hi);
        color: var(--text-pri);
        background: var(--surface-1);
    }
</style>