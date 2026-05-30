export enum Tab {
    Scp= 'scp',
    Mtf = 'mtf',
    Chaos = 'chaos',
    Cassie = 'C.A.S.S.I.E',
    Intercom = 'intercom',
    Settings = 'settings'
}

export enum Theme {
    Amber = 'amber',
    Phosphor = 'phosphor',
    Cobalt = 'cobalt'
}

export enum Language {
    English = 'English',
    Italian = 'Italian'
}

class SubtitleState {
    text = $state('- awaiting playback -')
    active = $state(false)

    private timer: ReturnType<typeof setTimeout> | null = null

    clear() {
        if (this.timer) {
            clearTimeout(this.timer)
            this.timer = null
        }
        this.text = '- awaiting playback -'
        this.active = false
    }

    show(text: string, duration = 5500) {
        if (this.timer) clearTimeout(this.timer)
        this.text = text
        this.active = true
        this.timer = setTimeout(() => this.clear(), duration)
    }
}

class AppState {
    activeTab = $state<Tab>(Tab.Scp)
    language = $state<Language>(Language.English)
    theme = $state<Theme>(Theme.Amber)
    volume = $state(50)
    showSubtitles = $state(true)
    assetFolder = $state<string | null>(null)

    subtitle = new SubtitleState()

    playing = $state<string | null>(null)

    setTab(tab: Tab) { this.activeTab = tab }
    setLanguage(language: Language) { this.language = language }
    setTheme(theme: Theme) { this.theme = theme }
    setVolume(volume: number) { this.volume = Math.max(0, Math.min(100, volume)) }
}

export const app = new AppState()