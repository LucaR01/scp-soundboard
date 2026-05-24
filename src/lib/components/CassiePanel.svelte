<script lang="ts">

    let inputText = $state('');


</script>

<div class="panel">
    <div class="sec-label">
        <span>(Cassie Label)</span>
        <div class="rule"></div>
    </div>

    <div class="body">
        <textarea class="textarea" bind:value={inputText} placeholder="(Placeholder)" onkeydown={undefined} rows="3" aria-label="C.A.S.S.I.E Announcement text"></textarea>
        <div class="preset-row">
            <span class="preset-label">(Presets)</span>
            <div class="chips">
                <!-- TODO: {#each for each preset} -->
                <button class="chip" onclick={() => {}} aria-label="Preset: (Preset Label)"></button> <!-- TODO: Retrieve data -->
            </div>
        </div>
        <div class="action-row">
            <button class="play-btn" onclick={() => {}} disabled={undefined} aria-label="(Cassie play label)">
                <i class="ti " aria-hidden="true"></i>
                (Cassie play)
            </button>
            <span class="hint">(Cassie Hint)</span>
        </div>
    </div>
</div>

<style>
    .panel {
        border: .5px solid var(--cassie-border);
        border-radius: 10px;
        padding: 1.1rem;
        background: var(--surface-1);
        min-height: 240px;
    }

    .sec-label {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 10px;
        letter-spacing: .12em;
        text-transform: uppercase;
        color: var(--cassie-text);
        margin-bottom: 1rem;
    }

    .rule { flex: 1; height: .5px; background: var(--cassie-border); }

    .body {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .textarea {
        width: 100%;
        padding: 9px 11px;
        border: .5px solid var(--border-md);
        border-radius: 7px;
        background: var(--surface-2);
        color: var(--text-pri);
        font-size: 13px;
        line-height: 1.55;
        outline: none;
        transition: border-color .15s;
        resize: vertical;
        min-height: 72px;
    }

    .textarea:focus { border-color: var(--cassie-border); }

    .preset-row {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        flex-wrap: wrap;
    }

    .preset-label {
        font-size: 10px;
        color: var(--text-ter);
        white-space: nowrap;
        padding-top: 4px;
        letter-spacing: .06em;
    }

    .chips {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
    }

    .chip {
        font-size: 10px;
        padding: 3px 9px;
        border: .5px solid var(--border);
        border-radius: 99px;
        background: transparent;
        color: var(--text-sec);
        transition: border-color .15s, color .15s;
        white-space: nowrap;
    }

    .chip:hover {
        border-color: var(--cassie-border);
        color: var(--cassie-text);
    }

    .action-row {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    }

    .play-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        padding: 7px 16px;
        border: .5px solid var(--cassie-border);
        border-radius: 7px;
        background: var(--surface-2);
        color: var(--cassie-text);
        letter-spacing: .04em;
        transition: background .15s, opacity .15s;
    }

    .play-btn:hover:not(:disabled) { background: var(--surface-3); }
    .play-btn:disabled { opacity: .4; cursor: not-allowed; }

    .hint {
        font-size: 10px;
        color: var(--text-ter);
        letter-spacing: .04em;
    }

    @keyframes spin { to { transform: rotate(360deg); } }
    .spin { display: inline-block; animation: spin .8s linear infinite; }
</style>