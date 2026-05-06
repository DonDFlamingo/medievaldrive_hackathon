import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DetailsDuVoyage from './pages/DetailsDuVoyage/detailsDuVoyage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DetailsDuVoyage />
  </StrictMode>,
)
