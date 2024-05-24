import React from 'react'
import ReactDOM from 'react-dom/client'
//import ReactDOM from 'react-dom'
import CountryApp from './CountryApp'
import './css/index.css'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <CountryApp />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>

  // <React.StrictMode>
  //   <Provider store={store}>
  //     <BrowserRouter>
  //       <CountryApp />
  //     </BrowserRouter>
  //   </Provider>
  // </React.StrictMode>
  
)

