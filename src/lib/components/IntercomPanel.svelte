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

</style>