import React from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import { CategoryAvator } from 'components/02_molecules/CategoryAvator'
import { NormalizedPayments } from 'lib/store/slices/entities'
import { numberWithDelimiter } from 'lib/util/number'

const Wrapper = styled(List)`
  background-color: inherit;
`

interface Props {
  date: string
  ids: number[]
  payments: NormalizedPayments
}

export const ListBodyItem: React.FC<Props> = ({ date, ids, payments }) => {
  return (
    <Wrapper subheader={<ListSubheader>{date}</ListSubheader>}>
      {ids.map((id: number) => {
        const payment = payments[id]
        return (
          <ListItem key={payment.id}>
            <ListItemAvatar>
              <CategoryAvator
                userType={payment.userType}
                category={payment.category}
              />
            </ListItemAvatar>
            <ListItemText secondary={payment.memo || 'その他'}>
              {payment.category}
            </ListItemText>
            <ListItemSecondaryAction>
              <ListItemText>
                {`${numberWithDelimiter(payment.price)} 円`}
              </ListItemText>
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </Wrapper>
  )
}
