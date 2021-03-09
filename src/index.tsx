import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { App } from 'components/App'
import { theme } from 'lib/theme'
import { createStore } from 'lib/store'

const preloadedState = {
  ui: {
    loading: true,
  },
}
const store = createStore(preloadedState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </StyledThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
