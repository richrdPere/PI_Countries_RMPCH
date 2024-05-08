import React from 'react'
import ReactDOM from 'react-dom/client'
import CountryApp from './CountryApp.jsx'
import './css/index.css'

import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
      <React.StrictMode>
      
        <CountryApp />
      </React.StrictMode>,

    </BrowserRouter>

  
  

  
)
