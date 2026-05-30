<script lang="ts">

    import TopBar from "$lib/components/TopBar.svelte"
    import TabBar from "$lib/components/TabBar.svelte"
    import SoundPanel from "$lib/components/SoundPanel.svelte"
    import SubtitleBar from "$lib/components/SubtitleBar.svelte"
    import {app, Tab} from "$lib/stores/state.svelte"
    import { sections } from '$lib/types/sounds'
    import {initShortcuts} from "$lib/utils/shortcuts";

    let { children } = $props()

    const theme = $derived(app.theme);

    $effect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    })

    $effect(() => {
        /*function onKey(e: KeyboardEvent) { //TODO: Remove, use function instead
            const tag = (e.target as HTMLElement).tagName.toLowerCase()
            if (tag === 'textarea' || tag === 'input') return

            if (e.key === '' || e.key === 'Escape') {
                e.preventDefault()
                app.subtitle.clear()
                return
            }
        }

        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)*/
        initShortcuts()
    })

    const scpSection = sections.find(s => s.id === 'scp')!
    const mtfSection = sections.find(s => s.id === 'mtf')!
    const chaosSection = sections.find(s => s.id === 'chaos')!
</script>

<div class="layout">
    <TopBar />
    <TabBar />

    <main class="content">
        {@render children()}
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