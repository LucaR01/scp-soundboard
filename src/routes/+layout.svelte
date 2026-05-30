<script lang="ts">

    import TopBar from "$lib/components/TopBar.svelte"
    import TabBar from "$lib/components/TabBar.svelte"
    import SoundPanel from "$lib/components/SoundPanel.svelte"
    import SubtitleBar from "$lib/components/SubtitleBar.svelte"
    import { app } from "$lib/stores/state.svelte"
    import { sections } from '$lib/types/sounds'

    const theme = $derived(app.theme);

    $effect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    })

    $effect(() => {
        function onKey(e: KeyboardEvent) {
            const tag = (e.target as HTMLElement).tagName.toLowerCase()
            if (tag === 'textarea' || tag === 'input') return

            if (e.key === '' || e.key === 'Escape') {
                e.preventDefault()
                app.subtitle.clear()
                return
            }
        }

        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    })

    const scpSection = sections.find(s => s.id === 'scp')!
    const mtfSection = sections.find(s => s.id === 'mtf')!
    const chaosSection = sections.find(s => s.id === 'chaos')!
</script>

<div class="layout">
    <TopBar />
    <TabBar />

    <main class="content">
        <!-- TODO: {#if activeTab === scp} -->
        <div id="panel-scp" role="tabpanel" aria-labelledby="tab-scp">
            <SoundPanel /> <!-- TODO: Add section -->
        </div>
        <!-- TODO: {:else if activeTab === mtf} -->
        <div id="panel-mtf" role="tabpanel" aria-labelledby="tab-mtf">
            <SoundPanel /> <!-- TODO: Add section -->
        </div>

        <!-- TODO: {:else if activeTab === chaos insurgency} -->
        <div id="panel-chaos" role="tabpanel" aria-labelledby="tab-chaos">
            <SoundPanel /> <!-- TODO: Add section -->
        </div>

        <!-- TODO: {:else if activeTab === C.A.S.S.I.E} -->
        <div id="panel-cassie" role="tabpanel" aria-labelledby="tab-cassie">
            <SoundPanel /> <!-- TODO: Add section -->
        </div>

        <!-- TODO: {:else if activeTab === intercom} -->
        <div id="panel-intercom" role="tabpanel" aria-labelledby="tab-intercom">
            <SoundPanel /> <!-- TODO: Add section -->
        </div>

        <!-- TODO: {:else if activeTab === settings} -->
        <div id="panel-settings" role="tabpanel" aria-labelledby="tab-settings">
            <SoundPanel /> <!-- TODO: Add section -->
        </div>
        <!-- TODO: {/if} -->
    </main>
    <SubtitleBar />
</div>

<style>
    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: .75rem;
        gap: 0;
        overflow: hidden;
    }

    .content {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .content > div {
        height: 100%;
    }
</style>