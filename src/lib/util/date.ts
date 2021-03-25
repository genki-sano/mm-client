import format from 'date-fns/format'
import DateUtils from '@date-io/date-fns'

export default class DateFnsUtils extends DateUtils {
  getCalendarHeaderText(date: Date): string {
    return format(date, 'yyyy年M月', { locale: this.locale })
  }
  getDatePickerHeaderText(date: Date) {
    return format(date, 'M月d日(eee)', { locale: this.locale })
  }
}
