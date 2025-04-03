import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SearchEngine from './SearchEngine'

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SearchEngine />
      </QueryClientProvider>
    </>
  )
}

export default App
