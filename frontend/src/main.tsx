import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppRoutes from './common/enums/app-routes.enum'
import EventsBoardPage from './components/EventsBoard/events-board-page'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.ROOT} element={<EventsBoardPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
