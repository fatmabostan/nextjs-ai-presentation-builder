import { Slide } from "@/lib/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface SlideState{
    slides: Slide[],
    setSlides: (slides: Slide[]) => void
}
//store
export const useSlideStore = create(
    persist<SlideState>((set, get) => ({
        //state
        slides: [],
        //actions
        setSlides: (slides: Slide[]) => set({ slides })
    }), 
    {
        name: 'slides-storage',
    }
)
)
