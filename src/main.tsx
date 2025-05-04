import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

try {
  const root = createRoot(rootElement)
  root.render(<App />)
} catch (error) {
  console.error('Error rendering app:', error)
  rootElement.innerHTML = `
    <div style="padding: 20px; text-align: center;">
      <h1>Something went wrong</h1>
      <p>Please try refreshing the page or contact support if the problem persists.</p>
    </div>
  `
}
