import React from 'react'
import { ListBodyError } from 'components/03_organisms/List/ListBody/Error'
import { ListBodyLoading } from 'components/03_organisms/List/ListBody/Loading'
import { useSelector } from 'lib/hooks'
import { ListBodyPresenter } from './ListBody/Presenter'

interface Props {
  loading: boolean
}

export const ListBody: React.FC<Props> = ({ loading }) => {
  const payments = useSelector((store) => store.entities.payments)
  const paymentIds = useSelector((store) => store.appList.paymentIds)

  if (loading) {
    return <ListBodyLoading />
  }
  if (!paymentIds || !payments) {
    return <ListBodyError massage="データがありません。" />
  }

  return <ListBodyPresenter payments={payments} paymentIds={paymentIds} />
}
