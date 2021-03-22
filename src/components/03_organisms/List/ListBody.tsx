import React from 'react'
import { ListBodyError } from 'components/03_organisms/List/ListBody/Error'
import { ListBodyLoading } from 'components/03_organisms/List/ListBody/Loading'
import { RootState, useSelector } from 'lib/store'
import { ListBodyPresenter } from './ListBody/Presenter'

interface Props {
  loading: boolean
}

export const ListBody: React.FC<Props> = ({ loading }) => {
  const payments = useSelector((store: RootState) => store.entities.payments)
  const paymentIds = useSelector((store: RootState) => store.appList.paymentIds)

  if (loading) {
    return <ListBodyLoading />
  }
  if (!paymentIds || !payments) {
    return <ListBodyError massage="データがありません。" />
  }

  return <ListBodyPresenter payments={payments} paymentIds={paymentIds} />
}
