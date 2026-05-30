import { app } from "$lib/stores/state.svelte";

export function initShortcuts() {
    function onKey(e: KeyboardEvent) {
        const tag = (e.target as HTMLElement).tagName.toLowerCase()
        if (tag === 'textarea' || tag === 'input') return
        if (e.key === ' ' || e.key === 'Escape') {
            e.preventDefault()
            app.subtitle.clear()
        }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
}