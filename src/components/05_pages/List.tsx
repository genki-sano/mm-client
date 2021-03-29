import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { parse } from 'date-fns'
import { ListTemplate } from 'components/04_templates/List'
import { fetchList } from 'lib/service/list'
import { useSelector } from 'lib/hooks'

export const ListPage: React.FC = () => {
  const loading = useSelector((store) => store.appList.loading)

  const { date } = useParams<{ date: string }>()
  const parseDate = parse(date, 'yyyyMM', new Date())

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchList(parseDate))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, date])

  return <ListTemplate loading={loading} date={parseDate} />
}
