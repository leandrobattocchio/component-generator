import { create } from 'zustand'

export const useConversationStorage = create((set, get) => ({
    code: null,
    language: 'javascript',
    framework: 'vanilla',
    loading: false,
    setLanguage: (language) => set({ code: null, language }),
    setFramework: (framework) => set({ code: null, framework }),
    generateComponent: async ({ prompt }) => {

        set({ loading: true })
        const language = get().language
        const framework = get().framework

        const response = await fetch(`/api/generate?prompt=${prompt}&language=${language}&framework=${framework}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const { content } = await response.json()

        set({ code: content, loading: false })
    },
}))
