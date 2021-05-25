import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import jaLocale from 'date-fns/locale/ja'
import { DateFnsUtils } from 'lib/util/date'

export const DatePickerProvider: React.FC = ({ children }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
      {children}
    </MuiPickersUtilsProvider>
  )
}
