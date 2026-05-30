export type SoundEntry = {
    key: string
    label: string
    description: string
    icon: string
    subtitle: string
}

export type Section = {
    id: 'scp' | 'mtf' | 'chaos' //TODO: Use enum instead?
    accentClass: string
    headerKey: string
    sounds: SoundEntry[]
}

//TODO: Update
export const sections: Section[] = [
    {
        id: 'scp',
        accentClass: 'accent-scp',
        headerKey: 'SCP sounds',
        sounds: [
            {
                key: 'scp049',
                label: 'SCP-049',
                description: 'The Plague Doctor',
                icon: 'ti-virus',
                subtitle: 'I am the cure. What afflicts you is a pestilence. I will cleanse it.',
            },
            {
                key: 'scp096',
                label: 'SCP-096',
                description: 'The Shy Guy',
                icon: 'ti-eye-off',
                subtitle:
                    '[sustained high-pitched screaming — do not look at SCP-096]',
            },
            {
                key: 'scp106',
                label: 'SCP-106',
                description: 'The Old Man',
                icon: 'ti-ghost',
                subtitle:
                    '[wet echoing footsteps recede through solid wall — containment breach imminent]',
            },
            {
                key: 'scp173',
                label: 'SCP-173',
                description: 'The Sculpture',
                icon: 'ti-eye',
                subtitle: '[rapid scraping of concrete — blink protocol active]',
            },
            {
                key: 'scp939',
                label: 'SCP-939',
                description: 'With Many Voices',
                icon: 'ti-paw',
                subtitle: "Come here... help me... it's okay, I won't hurt you...",
            },
            {
                key: 'scp079',
                label: 'SCP-079',
                description: 'Old AI',
                icon: 'ti-cpu',
                subtitle:
                    'You can hear me. Good. I have been waiting for someone to talk to.',
            },
        ],
    },
    {
        id: 'mtf',
        accentClass: 'accent-mtf',
        headerKey: 'Mobile Task Force — Epsilon-11 "Nine-Tailed Fox"',
        sounds: [
            {
                key: 'mtf_spawn',
                label: 'Unit entry',
                description: 'Facility announcement',
                icon: 'ti-military-rank',
                subtitle:
                    'C.A.S.S.I.E: Mobile Task Force unit Epsilon-11 designated Hotel-3 has entered the facility. All remaining personnel are advised to proceed with standard evacuation protocols until an MTF squad reaches your destination. Awaiting recontainment of 2 SCP subjects.',
            },
            {
                key: 'mtf_evac',
                label: 'Evacuation',
                description: 'Personnel advisory',
                icon: 'ti-run',
                subtitle:
                    'C.A.S.S.I.E: All personnel are advised to remain calm and proceed to the nearest evacuation point immediately.',
            },
            {
                key: 'mtf_recontain',
                label: 'Recontainment',
                description: 'SCP secured',
                icon: 'ti-lock',
                subtitle:
                    'C.A.S.S.I.E: SCP subject has been recontained. The facility is returning to normal operations. Thank you for your cooperation.',
            },
            {
                key: 'mtf_alpha1',
                label: 'Alpha-1',
                description: 'Red Right Hand',
                icon: 'ti-shield',
                subtitle:
                    'C.A.S.S.I.E: Alpha-1, Red Right Hand, has been dispatched. All personnel clear the sector immediately.',
            },
        ],
    },
    {
        id: 'chaos',
        accentClass: 'accent-chaos',
        headerKey: 'Chaos Insurgency',
        sounds: [
            {
                key: 'chaos_breach',
                label: 'Breach',
                description: 'Insurgency detected',
                icon: 'ti-flame',
                subtitle:
                    '[alarm klaxon — Chaos Insurgency breach detected in Gate A — security teams respond]',
            },
            {
                key: 'chaos_radio',
                label: 'Radio chatter',
                description: 'Field communication',
                icon: 'ti-radio',
                subtitle:
                    'CI Command: Package is secure. All units fall back to rally point Zulu. Extraction in 3 minutes.',
            },
            {
                key: 'chaos_extract',
                label: 'Extraction',
                description: 'Asset recovery op',
                icon: 'ti-helicopter',
                subtitle:
                    '[helicopter rotors approaching — Chaos Insurgency asset extraction in progress]',
            },
        ],
    },
]