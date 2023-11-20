import { create } from 'zustand'


type AppStoreTypes = {
    currentDomain: number | null,
    setCurrentDomain: (domain: number) => void
}

export const appStore = create<AppStoreTypes>((set) => ({
    currentDomain: +localStorage.getItem('domain')! || null,
    setCurrentDomain: (domain) => set(() => ({ currentDomain: domain })),
    })
)