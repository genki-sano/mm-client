import React from 'react'
import moment from 'moment'
import { ListHeaderPresenter } from 'components/03_organisms/List/ListHeader/Presenter'
import { RootState, useSelector } from 'lib/store'

interface Props {
  loading: boolean
  date: string
}

export const ListHeader: React.FC<Props> = ({ loading, date }) => {
  const users = useSelector((store: RootState) => store.entities.users)
  const totals = useSelector((store: RootState) => store.appList.totals)

  const startDate = moment(date).startOf('month')
  const endDate = moment(date).endOf('month')

  const lastMonth = moment(date).subtract(1, 'month').format('YYYYMM')
  const nextMonth = moment(date).add(1, 'month').format('YYYYMM')

  const lastTo = {
    pathname: `/list/${lastMonth}`,
  }
  const nextTo = {
    pathname: `/list/${nextMonth}`,
  }

  return (
    <ListHeaderPresenter
      loading={loading}
      users={users}
      totals={totals}
      startDate={startDate}
      endDate={endDate}
      lastTo={lastTo}
      nextTo={nextTo}
    />
  )
}
