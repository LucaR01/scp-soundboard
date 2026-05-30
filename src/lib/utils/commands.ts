import { invoke } from '@tauri-apps/api/core';

export const playSound = (section: string, key: string, volume: number) =>
    invoke<void>('play_sound', { section, key, volume})

export const cassieSpeak = (text: string, volume: number) => invoke<void>('cassie_speak', { text, volume })

