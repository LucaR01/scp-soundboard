<script lang="ts">

    /*type TabDef = { id: Tab, icon: string, };

    const TABS: TabDef[] = [
        { id: 'scp',      icon: 'ti-alert-hexagon',          labelKey: 'scp',      accent: 'accent-scp'      },
        { id: 'mtf',      icon: 'ti-shield-half',             labelKey: 'mtf',      accent: 'accent-mtf'      },
        { id: 'ci',       icon: 'ti-flame',                   labelKey: 'ci',       accent: 'accent-ci'       },
        { id: 'cassie',   icon: 'ti-wave-square',             labelKey: 'cassie',   accent: 'accent-cassie'   },
        { id: 'intercom', icon: 'ti-microphone',              labelKey: 'intercom', accent: 'accent-intercom' },
        { id: 'settings', icon: 'ti-adjustments-horizontal',  labelKey: 'settings', accent: ''                },
    ]*/
</script>

<!-- TODO: Uncomment
<nav class="tabs" role="tablist" aria-label="Sections">
    {#each TABS as tab}
        <button class="tab {false}" class:active={false} onclick={() => false} role="tab" aria-selected={false} aria-controls="panel {false}">
            <i class="ti {false}" aria-hidden="true"></i>

        </button>
    {/each}
</nav>
-->

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