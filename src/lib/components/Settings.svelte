<script lang="ts">

</script>

<div class="panel">
    <div class="sec-label">
        <span>(Settings Label)</span>
        <div class="rule"></div>
    </div>

    <div class="rows">
        <div class="row">
            <div class="row-info">
                <span class="row-name">(Settings Volume)</span>
                <span class="row-desc">(Settings Volume Desc)</span>
            </div>
            <div class="row-control vol-row">
                <i class="ti ti-volume" aria-hidden="true"></i> <!-- TODO: Add Style -->
                <input type="range" min="0" max="100" step="1" value="(App Volume)" oninput={undefined} aria-label="(Volume Settings)" class="vol-slider">
                <span class="vol-label">(App Volume)%</span>
            </div>
        </div>

        <div class="row">
            <div class="row-info">
                <span class="row-name">(Settings Language)</span>
                <span class="row-desc">(Settings Language Description)</span>
            </div>
            <div class="btn-group">
                <button class="gbtn" class:active={undefined} onclick={() => undefined}>(Settings English)</button>
                <button class="gbtn" class:active={undefined} onclick={() => undefined}>(Settings Italian)</button>
            </div>
        </div>

        <div class="row">
            <div class="row-info">
                <span class="row-name">(Settings Theme)</span>
                <span class="row-desc">(Settings Theme Description)</span>
            </div>
            <div class="btn-group">
                <!-- TODO: {#each theme} -->
                <button class="gbtn theme-btn theme-{undefined}" class:active={undefined} onclick={() => undefined}>(Theme[i])</button>
                <!-- TODO {/each} -->
            </div>
        </div>

        <div class="row">
            <div class="row-info">
                <span class="row-name">(Settings Subtitle)</span>
                <span class="row-desc">(Settings Subtitle Description)</span>
            </div>
            <button class="toggle" class:on={undefined} onclick={() => undefined} role="switch" aria-checked={undefined} aria-label={undefined}>
                <div class="knob"></div>
            </button>
        </div>
    </div>
</div>

<style>
    .panel {
        border: .5px solid var(--border);
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
        color: var(--text-ter);
        margin-bottom: 1rem;
    }

    .rule { flex: 1; height: .5px; background: var(--border); }

    .rows { display: flex; flex-direction: column; }

    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: .85rem 0;
        border-bottom: .5px solid var(--border);
    }

    .row:last-child { border-bottom: none; padding-bottom: 0; }

    .row-info {
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 0;
    }

    .row-name {
        font-size: 14px;
        color: var(--text-pri);
    }

    .row-desc {
        font-size: 11px;
        color: var(--text-sec);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 340px;
    }

    .row-control { flex-shrink: 0; }

    .vol-row {
        display: flex;
        align-items: center;
        gap: 7px;
    }

    .vol-slider {
        width: 130px;
        accent-color: var(--accent-text);
    }

    .vol-label {
        font-size: 12px;
        color: var(--text-sec);
        min-width: 34px;
        text-align: right;
    }

    .btn-group {
        display: flex;
        gap: 4px;
        flex-shrink: 0;
    }

    .gbtn {
        font-size: 11px;
        padding: 5px 12px;
        border: .5px solid var(--border-md);
        border-radius: 6px;
        background: transparent;
        color: var(--text-sec);
        transition: all .15s;
        letter-spacing: .03em;
    }

    .gbtn:hover { border-color: var(--border-hi); color: var(--text-pri); }

    .gbtn.active {
        background: var(--surface-3);
        border-color: var(--border-hi);
        color: var(--text-pri);
    }

    .theme-amber.active   { border-color: var(--accent-dim); color: #EF9F27; }
    .theme-phosphor.active{ border-color: #3B6D11;           color: #77B73A; }
    .theme-cobalt.active  { border-color: #185FA5;           color: #4FA3E8; }

    .action-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        padding: 6px 13px;
        border: .5px solid var(--border-md);
        border-radius: 6px;
        background: var(--surface-2);
        color: var(--text-sec);
        transition: all .15s;
        flex-shrink: 0;
    }

    .action-btn:hover { border-color: var(--border-hi); color: var(--text-pri); }

    .toggle {
        width: 36px;
        height: 20px;
        border: .5px solid var(--border-md);
        border-radius: 99px;
        position: relative;
        background: transparent;
        transition: background .2s, border-color .2s;
        flex-shrink: 0;
        cursor: pointer;
    }

    .toggle.on {
        background: rgba(99, 153, 34, .3);
        border-color: #3B6D11;
    }

    .knob {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: var(--border-md);
        position: absolute;
        top: 2px;
        left: 2px;
        transition: left .2s, background .2s;
        pointer-events: none;
    }

    .toggle.on .knob { left: 18px; background: #77B73A; }
</style>