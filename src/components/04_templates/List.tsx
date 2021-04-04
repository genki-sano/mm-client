import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { Snackbar } from 'components/03_organisms/Common/Snackbar'
import { ListBody } from 'components/03_organisms/List/ListBody'
import { ListHeader } from 'components/03_organisms/List/ListHeader'
import { theme } from 'lib/theme'

const Wrapper = styled(Container)`
  min-height: 100vh;
  padding: 0;
  background-color: ${theme.palette.background.paper};
`
const ListWrapper = styled(Container)`
  padding-right: ${`${theme.spacing(1)}px`};
  padding-left: ${`${theme.spacing(1)}px`};
  background-color: inherit;
`
const FloatingActionButton = styled(Fab)`
  position: fixed;
  right: ${`${theme.spacing(2)}px`};
  bottom: ${`${theme.spacing(3)}px`};
  z-index: ${theme.zIndex.modal};
`
const IconLink = styled(Link)`
  width: ${`${theme.spacing(3)}px`};
  height: ${`${theme.spacing(3)}px`};
  color: ${theme.palette.primary.contrastText};
`

interface Props {
  loading: boolean
  date: Date
}

export const ListTemplate: React.FC<Props> = ({ loading, date }) => {
  return (
    <Wrapper maxWidth="sm">
      <ListHeader loading={loading} date={date} />
      <ListWrapper maxWidth="sm">
        <ListBody loading={loading} />
      </ListWrapper>
      <FloatingActionButton aria-label="add" color="primary">
        <IconLink to={'/add'}>
          <AddIcon />
        </IconLink>
      </FloatingActionButton>
      <Snackbar />
    </Wrapper>
  )
}
