import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/0_app/index.css'
import App from '@/0_app/App'
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@/0_app/provider/ThemeProvider";

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const Wrapper = import.meta.env.MODE === "development" ? StrictMode : Fragment;


createRoot(rootElement).render(
  <Wrapper>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Wrapper>
)
