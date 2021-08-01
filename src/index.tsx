import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/macro'
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { App } from 'components/App'
import { DatePickerProvider } from 'contexts/DatePickerProvider'
import { firebaseApp } from 'lib/external/firebase'
import { liffApp } from 'lib/external/liff'
import { createStore } from 'lib/store'
import { theme } from 'lib/theme'

liffApp.init().catch((err) => alert(err))
firebaseApp.init()
const store = createStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <DatePickerProvider>
              <BrowserRouter>
                <CssBaseline />
                <App />
              </BrowserRouter>
            </DatePickerProvider>
          </StyledThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
