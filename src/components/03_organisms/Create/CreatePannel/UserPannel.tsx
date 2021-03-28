import React from 'react'
import { UseFormMethods } from 'react-hook-form'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import CheckIcon from '@material-ui/icons/Check'
import { PaymentCreateForm } from 'components/05_pages/Create'
import { NormalizedUsers, UserType } from 'lib/store/slices/entities'
import { theme } from 'lib/theme'

const Wrapper = styled.div`
  height: 264px;
  padding-top: ${`${theme.spacing(2)}px`};
  padding-bottom: ${`${theme.spacing(2)}px`};
  color: ${theme.palette.primary.contrastText};
`
const IconWrapper = styled(ListItemIcon)`
  color: ${theme.palette.primary.contrastText};
  min-width: 0;
`

interface Props {
  watch: UseFormMethods<PaymentCreateForm>['watch']
  setValue: UseFormMethods<PaymentCreateForm>['setValue']
  users: NormalizedUsers
}

export const UserPannel: React.FC<Props> = ({ watch, setValue, users }) => {
  const setUser = (user: UserType) => {
    setValue('user', user)
  }
  const user = watch('user')

  return (
    <Wrapper>
      <List>
        <ListItem button onClick={() => setUser('woman')}>
          <ListItemText primary={users.woman.name || '花子'} />
          {user === 'woman' && (
            <ListItemSecondaryAction>
              <IconWrapper color="inherit">
                <CheckIcon />
              </IconWrapper>
            </ListItemSecondaryAction>
          )}
        </ListItem>
        <ListItem button onClick={() => setUser('man')}>
          <ListItemText primary={users.man.name || '太郎'} />
          {user === 'man' && (
            <ListItemSecondaryAction>
              <IconWrapper color="inherit">
                <CheckIcon />
              </IconWrapper>
            </ListItemSecondaryAction>
          )}
        </ListItem>
      </List>
    </Wrapper>
  )
}
