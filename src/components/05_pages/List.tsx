import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { parse } from 'date-fns'
import { ListTemplate } from 'components/04_templates/List'
import { useDispatch, useSelector } from 'lib/hooks'
import { fetchList } from 'lib/service/list'

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
