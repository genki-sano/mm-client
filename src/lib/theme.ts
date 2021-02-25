import { createMuiTheme, Theme } from '@material-ui/core'
import { lightBlue } from '@material-ui/core/colors'

export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      ...lightBlue,
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;`,
  },
})
