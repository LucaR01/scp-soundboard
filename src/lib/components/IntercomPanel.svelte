<script lang="ts">
    function toggleRecord() {

    }

    function importFile() {

    }


    function playProcessed() {

    }


    function downloadWav() {

    }

    function toggleEffect() {

    }
</script>

<div class="panel">
    <div class="sec-label">
        <span>(Intercom Label)</span> <!-- TODO: Retrieve data -->
        <div class="rule"></div>
    </div>

    <div class="grid">
        <div class="left-col">
            <div class="source-card">
                <div class="card-title">(Source title)</div>
                <button class="action-btn" class:recording={undefined} onclick={toggleRecord} aria-label="(Record | Stop Recording)">
                    <i class="ti ti-record" aria-hidden="true"></i>
                    Record
                </button>
                <button class="action-btn" onclick={importFile} aria-label="Import">
                    <i class="ti ti-upload" aria-hidden="true"></i>
                    Import
                </button>

                <div class="waveform" aria-hidden="true">
                    <!-- TODO: {#each} -->
                    <div class="bar" class:active={undefined}></div>
                </div>

                <div class="source-hint">(Source)</div>
            </div>

            <div class="bottom-btns">
                <button class="action-btn primary" onclick={playProcessed} disabled={undefined} aria-label="Play processed">
                    <i class="ti processed"></i>
                    Play processed
                </button>
                <button class="action-btn" onclick={downloadWav} disabled={undefined} aria-label="Download">
                    <i class="ti ti-download" aria-hidden="true"></i>
                    Download
                </button>
            </div>
        </div>

        <div class="dsp-card">
            <div class="card-title">(Title)</div>
            <!-- TODO: {#each} -->
            <div class="eff-row">
                <div class="eff-info">
                    <div class="eff-name">(Effect Name)</div>
                    <div class="eff-detail">(Effect Detail)</div>
                </div>
                <button class="toggle" class:on={undefined} onclick={() => toggleEffect()} role="switch" aria-checked={undefined} aria-label="(Effect Name): ">
                    <div class="knob"></div>
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    .panel {
        border: .5px solid var(--intercom-border);
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
        color: var(--intercom-text);
        margin-bottom: 1rem;
    }

    .rule { flex: 1; height: .5px; background: var(--intercom-border); }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    .left-col {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .source-card, .dsp-card {
        border: .5px solid var(--border);
        border-radius: 8px;
        padding: .85rem;
        background: var(--surface-2);
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    .card-title {
        font-size: 9px;
        letter-spacing: .12em;
        text-transform: uppercase;
        color: var(--text-ter);
        margin-bottom: 2px;
    }

    .action-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        padding: 6px 12px;
        border: .5px solid var(--border-md);
        border-radius: 6px;
        background: var(--surface-3);
        color: var(--text-sec);
        transition: border-color .15s, color .15s, background .15s;
        letter-spacing: .03em;
    }

    .action-btn:hover:not(:disabled) {
        border-color: var(--border-hi);
        color: var(--text-pri);
    }

    .action-btn:disabled { opacity: .4; cursor: not-allowed; }

    .action-btn.recording {
        border-color: var(--danger);
        color: var(--danger);
        animation: pulse-border 1.2s ease-in-out infinite;
    }

    .action-btn.primary {
        border-color: var(--intercom-border);
        color: var(--intercom-text);
        flex: 1;
    }

    @keyframes pulse-border {
        0%, 100% { border-color: var(--danger); }
        50%       { border-color: rgba(226, 75, 74, .3); }
    }

    .waveform {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
        height: 36px;
        border: .5px solid var(--border);
        border-radius: 6px;
        padding: 5px 8px;
        overflow: hidden;
        background: var(--surface-1);
    }

    .bar {
        width: 3px;
        border-radius: 2px;
        background: var(--border-md);
        transition: height .1s ease, background .2s;
        min-height: 2px;
    }

    .bar.active { background: var(--intercom-text); }

    .source-hint {
        font-size: 10px;
        color: var(--text-ter);
        text-align: center;
        padding: 1px 0;
        letter-spacing: .04em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .bottom-btns {
        display: flex;
        gap: 6px;
    }

    .eff-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 0;
        border-bottom: .5px solid var(--border);
    }

    .eff-row:last-child { border-bottom: none; }

    .eff-name   { font-size: 12px; color: var(--text-pri); }
    .eff-detail { font-size: 10px; color: var(--text-ter); margin-top: 1px; }

    .toggle {
        width: 32px;
        height: 18px;
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
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--border-md);
        position: absolute;
        top: 2px;
        left: 2px;
        transition: left .2s, background .2s;
        pointer-events: none;
    }

    .toggle.on .knob {
        left: 16px;
        background: #77B73A;
    }

    @keyframes spin { to { transform: rotate(360deg); } }
    .spin { display: inline-block; animation: spin .8s linear infinite; }
</style>