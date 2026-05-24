<script lang="ts">
    function onVolumeInput() {
        //TODO:
    }
</script>

<div class="subtitle-bar" role="status" aria-live="polite" aria-atomic="true">
    <span class="sub-label" aria-hidden="true">(Subtitle Label)</span> <!-- TODO: Retrieve from variable -->
    <!-- TODO: {#if show subtitle} -->
    <span class="sub-text" class:active={undefined}>(Subtitle text)</span>
    <!-- TODO: {:else} -->
    <span class="sub-text">—</span>

    <div class="vol-row" aria-label="Volume">
        <i class="ti ti-volume" aria-hidden="true"></i>
        <input type="range" min="0" max="100" step="1" value="(Volume)" oninput={onVolumeInput} aria-label="Master Volume" class="vol-slider">
        <span>(App Volume%)</span> <!-- TODO: Retrieve data -->
    </div>
</div>

<style>
    .subtitle-bar {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        border: .5px solid var(--border);
        border-radius: 8px;
        padding: .6rem 1rem;
        min-height: 50px;
        background: var(--surface-1);
    }

    .sub-label {
        font-size: 9px;
        letter-spacing: .14em;
        text-transform: uppercase;
        color: var(--text-ter);
        white-space: nowrap;
        padding-top: 3px;
        border-right: .5px solid var(--border);
        padding-right: 10px;
    }

    .sub-text {
        flex: 1;
        font-size: 12px;
        line-height: 1.55;
        color: var(--text-ter);
        transition: color .25s;
        padding-top: 1px;
    }

    .sub-text.active {
        color: var(--danger);
    }

    .vol-row {
        display: flex;
        align-items: center;
        gap: 7px;
        flex-shrink: 0;
    }

    .vol-slider {
        width: 80px;
        accent-color: var(--accent-text);
    }

    .vol-out {
        font-size: 11px;
        color: var(--text-sec);
        min-width: 32px;
        text-align: right;
    }
</style>