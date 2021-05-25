import {
  format,
  startOfMonth,
  endOfMonth,
  subMonths,
  addMonths,
} from 'date-fns'
import { ListHeaderPresenter } from 'components/03_organisms/List/ListHeader/Presenter'
import { useSelector } from 'lib/hooks'

interface Props {
  loading: boolean
  date: Date
}

export const ListHeader: React.FC<Props> = ({ loading, date }) => {
  const users = useSelector((store) => store.entities.users)
  const totals = useSelector((store) => store.appList.totals)

  const startDate = startOfMonth(date)
  const endDate = endOfMonth(date)

  const lastMonth = subMonths(date, 1)
  const nextMonth = addMonths(date, 1)

  const formatType = 'yyyyMM'
  const lastTo = {
    pathname: `/list/${format(lastMonth, formatType)}`,
  }
  const nextTo = {
    pathname: `/list/${format(nextMonth, formatType)}`,
  }

  return (
    <ListHeaderPresenter
      loading={loading}
      users={users}
      totals={totals}
      formatType="yyyy/MM/dd"
      startDate={startDate}
      endDate={endDate}
      lastTo={lastTo}
      nextTo={nextTo}
    />
  )
}
