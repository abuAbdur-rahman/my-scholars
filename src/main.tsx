import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './hooks/themeProvider.tsx'
import { QueryClient, QueryClientProvider  } from 'react-query'
import { LectureProvider } from './hooks/useLectursPlay.tsx'

const client = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <LectureProvider>
      <ThemeProvider>
        <App />
          </ThemeProvider>
          </LectureProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
