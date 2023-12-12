'use client'
import { QueryClientProvider } from "@tanstack/react-query"
import { cliet } from "./config/getQueryClient"


type AppProvidersProps = {
    children: React.ReactNode
}

export default function AppProvider({children}: AppProvidersProps) {
    return (
        <QueryClientProvider client={cliet}>
            {children}
        </QueryClientProvider>
    )
}