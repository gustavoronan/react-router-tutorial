import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expenses from './routes/Expenses/index.tsx'
import Invoices from './routes/Invoices/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<App></App>}>
            <Route path = "/expenses" element = {<Expenses></Expenses>}></Route>
            <Route path = "/invoices" element = {<Invoices></Invoices>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
) 
