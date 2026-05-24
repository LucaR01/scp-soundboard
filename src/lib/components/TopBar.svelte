<script lang="ts">

    function setLanguage() {

    }


</script>

<header class="topbar">
    <div class="logo">
        <div class="badge" aria-hidden="true">SCP</div>
        <div class="title-block">
            <span class="title-main">TITLE</span>
            <span class="title-sub">SUBTITLE</span>
        </div>
    </div>

    <div class="controls">
        <button class="pill" class:active={false} onclick={() => setLanguage()}>EN</button>
        <button class="pill" class:active={false} onclick={() => setLanguage()}>IT</button>
    </div>
</header>

<style>
    .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .6rem 1rem;
        border: .5px solid var(--border);
        border-radius: 8px;
        margin-bottom: .7rem;
        background: var(--surface-1);
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .badge {
        width: 38px;
        height: 38px;
        border: 1.5px solid var(--border-hi);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: .08em;
        color: var(--text-pri);
        flex-shrink: 0;
    }

    .title-block {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .title-main {
        font-size: 12px;
        font-weight: 500;
        letter-spacing: .1em;
        text-transform: uppercase;
        color: var(--text-pri);
    }

    .title-sub {
        font-size: 10px;
        color: var(--text-ter);
        letter-spacing: .06em;
    }

    .controls {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .pill {
        font-family: inherit;
        font-size: 11px;
        padding: 4px 10px;
        border: .5px solid var(--border-md);
        border-radius: 99px;
        background: transparent;
        color: var(--text-sec);
        cursor: pointer;
        transition: background .15s, color .15s, border-color .15s;
        letter-spacing: .04em;
    }

    .pill:hover,
    .pill.active {
        background: var(--surface-3);
        color: var(--text-pri);
        border-color: var(--border-hi);
    }

    .icon-pill {
        padding: 4px 9px;
        font-size: 14px;
    }

    .icon-pill i { vertical-align: -2px; }
</style>