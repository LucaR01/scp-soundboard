<script lang="ts">
    import * as m from '../../paraglide/messages.js';
</script>

<div class="notice" role="alert">
    <i class="ti ti-alert-triangle" aria-hidden="true"></i> <!-- TODO: Add style -->
    <span>Copyright</span> <!-- TODO: Use variable -->
</div>

<div class="panel">
    <div class="sec-label">
        <span>(Section Header)</span> <!-- TODO: Use variable -->
        <div class="rule"></div>
    </div>

    <!-- TODO: Remove undefined and implement functions -->
    <div class="grid">
        <!-- TODO: Use {#each sound} -->
        <button class="sbtn " class:playing={undefined} onclick={() => {}} aria-pressed={undefined} aria-label="(Label)">
            <span class="lbl">
                <i class="ti {undefined}" aria-hidden="true"></i>
                (Sound Label) <!-- TODO: Use variable -->
            </span>
            <span class="desc">(Sound Description)</span> <!-- TODO: Use variable -->
        </button>
    </div>
</div>

<style>
    .notice {
        font-size: 11px;
        color: var(--danger);
        padding: 7px 11px;
        border: .5px solid rgba(226, 75, 74, .35);
        border-radius: 6px;
        margin-bottom: .7rem;
        display: flex;
        align-items: flex-start;
        gap: 8px;
        line-height: 1.5;
        background: var(--danger-dim);
    }

    .panel {
        border: .5px solid var(--border);
        border-radius: 10px;
        padding: 1.1rem;
        min-height: 240px;
        background: var(--surface-1);
    }

    .sec-label {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 10px;
        letter-spacing: .12em;
        text-transform: uppercase;
        color: var(--text-ter);
        margin-bottom: .9rem;
    }

    .rule {
        flex: 1;
        height: .5px;
        background: var(--border);
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
        gap: 7px;
    }

    .sbtn {
        padding: 11px 13px;
        border: .5px solid var(--border-md);
        border-radius: 7px;
        background: var(--surface-2);
        color: var(--text-pri);
        text-align: left;
        transition: border-color .15s, background .15s, color .15s;
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 12px;
    }

    .sbtn:hover {
        border-color: var(--border-hi);
        background: var(--surface-3);
    }

    /* ── Section accent colours when playing ─────────────────── */
    .sbtn.accent-scp.playing { border-color: var(--scp-border); color: var(--scp-text); }
    .sbtn.accent-mtf.playing { border-color: var(--mtf-border); color: var(--mtf-text); }
    .sbtn.accent-chaos.playing  { border-color: var(--chaos-border);  color: var(--chaos-text);  }

    .lbl {
        font-weight: 500;
        font-size: 11px;
        letter-spacing: .04em;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .desc {
        font-size: 10px;
        color: var(--text-ter);
        transition: color .15s;
    }

    .sbtn.playing .desc { color: inherit; opacity: .6; }
</style>