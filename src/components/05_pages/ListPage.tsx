import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import moment from 'moment'
import { ListTemplate } from 'components/04_templates/ListTemplate'
import { fetchList } from 'lib/service/list'
import { RootState, useSelector } from 'lib/store'

export const ListPage: React.FC = () => {
  const loading = useSelector((store: RootState) => store.appList.loading)

  const { date } = useParams<{ date: string }>()
  const formatDate = moment(date, 'YYYYMM').format('YYYY-MM-DD')

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchList(new Date(formatDate)))
  }, [dispatch, formatDate])

  return <ListTemplate loading={loading} date={date} />
}
