import styled from 'styled-components/macro'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import { CategoryAvator } from 'components/02_molecules/CategoryAvator'
import { NormalizedPaymentIds } from 'lib/store/slices/app/list'
import { NormalizedPayments } from 'lib/store/slices/entities'
import { numberWithDelimiter } from 'lib/util/number'

const Wrapper = styled(List)`
  background-color: inherit;
`
const ListSection = styled.li`
  background-color: inherit;
`

interface Props {
  payments: NormalizedPayments
  paymentIds: NormalizedPaymentIds
}

export const ListBodyPresenter: React.FC<Props> = (props) => {
  const { payments, paymentIds } = props

  return (
    <Wrapper>
      {Object.keys(paymentIds).map((date: string, index: number) => {
        const ids = paymentIds[date]
        return (
          <ListSection key={`section-${index}`}>
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
                    <ListItemText
                      primary={payment.category}
                      secondary={payment.memo || 'その他'}
                    />
                    <ListItemSecondaryAction>
                      <ListItemText
                        primary={`${numberWithDelimiter(payment.price)} 円`}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                )
              })}
            </Wrapper>
          </ListSection>
        )
      })}
    </Wrapper>
  )
}
