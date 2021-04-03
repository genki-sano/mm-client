import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { App } from 'components/App'
import { DatePickerProvider } from 'contexts/DatePickerProvider'
import { createStore } from 'lib/store'
import { theme } from 'lib/theme'

const preloadedState = {
  appAuth: {
    loading: true,
    authUserId: null,
  },
}
const store = createStore(preloadedState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <DatePickerProvider>
              <CssBaseline />
              <App />
            </DatePickerProvider>
          </StyledThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
