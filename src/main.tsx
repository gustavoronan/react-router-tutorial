import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expenses from './routes/Expenses/index.tsx'
import Invoices from './routes/Invoices/index.tsx'
import NotFound from './routes/NotFound/index.tsx'
import Invoice from './routes/Invoices/Invoice/index.tsx'
import InvoicesIndex from './routes/Invoices/InvoicesIndex/index.tsx'
import BemVindo from './routes/BemVindo/index.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<App></App>}>
            <Route index element ={<BemVindo></BemVindo>}></Route>
            <Route path = "/expenses" element = {<Expenses></Expenses>}></Route>
            <Route path = "/invoices" element = {<Invoices></Invoices>}>
              <Route index element ={<InvoicesIndex></InvoicesIndex>}></Route>
                <Route path=":invoiceId" element={<Invoice/>}></Route> {/* :invoiceId é o parametro da invoice especifica */} 
            </Route>
            <Route path = "*" element = {
              <NotFound></NotFound>
            }></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
) 
