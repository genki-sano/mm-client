import React from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import { ListError } from 'components/03_organisms/ListError'
import { ListLoading } from 'components/03_organisms/ListLoading'
import { ListBodyItem } from 'components/03_organisms/ListBodyItem'
import { RootState, useSelector } from 'lib/store'

const Wrapper = styled(List)`
  background-color: inherit;
`
const ListSection = styled.li`
  background-color: inherit;
`

interface Props {
  loading: boolean
}

export const ListBody: React.FC<Props> = ({ loading }) => {
  const payments = useSelector((store: RootState) => store.entities.payments)
  const paymentIds = useSelector((store: RootState) => store.appList.paymentIds)

  if (loading) {
    return <ListLoading />
  }
  if (!paymentIds || !payments) {
    return <ListError massage="データがありません。" />
  }

  let index = 0
  return (
    <Wrapper>
      {Object.keys(paymentIds).map((date: string) => {
        return (
          <ListSection key={`section-${index++}`}>
            <ListBodyItem
              date={date}
              ids={paymentIds[date]}
              payments={payments}
            />
          </ListSection>
        )
      })}
    </Wrapper>
  )
}
