export const useInitialLoading = () => {
    const isLoading = ref(true)
    const progress = ref(0)
    const hasVisited = ref(false)

    const checkFirstVisit = () => {
        if (process.client) {
            const visited = localStorage.getItem('site-visited')
            hasVisited.value = visited === 'true'

            if (hasVisited.value) {
                isLoading.value = false
                return
            }
        }
    }

    const simulateLoading = async (duration: number = 3000) => {
        if (hasVisited.value) return

        const steps = 20
        const stepDuration = duration / steps

        for (let i = 0; i <= steps; i++) {
            progress.value = (i / steps) * 100

            if (i < steps) {
                await new Promise(resolve => setTimeout(resolve, stepDuration))
            }
        }

        await new Promise(resolve => setTimeout(resolve, 500))

        isLoading.value = false

        if (process.client) {
            localStorage.setItem('site-visited', 'true')
        }
    }

    const resetVisitStatus = () => {
        if (process.client) {
            localStorage.removeItem('site-visited')
            hasVisited.value = false
        }
    }

    return {
        isLoading: readonly(isLoading),
        progress: readonly(progress),
        hasVisited: readonly(hasVisited),
        checkFirstVisit,
        simulateLoading,
        resetVisitStatus
    }
}