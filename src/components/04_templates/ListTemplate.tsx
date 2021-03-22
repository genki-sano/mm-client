import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import { ListBody } from 'components/03_organisms/List/ListBody'
import { ListHeader } from 'components/03_organisms/List/ListHeader'
import { theme } from 'lib/theme'

const Wrapper = styled(Container)`
  background-color: ${theme.palette.background.paper};
  min-height: 100vh;
  padding: 0;
`
const ListWrapper = styled(Container)`
  background-color: inherit;
  padding-right: ${`${theme.spacing(1)}px`};
  padding-left: ${`${theme.spacing(1)}px`};
`

interface Props {
  loading: boolean
  date: string
}

export const ListTemplate: React.FC<Props> = ({ loading, date }) => {
  return (
    <Wrapper maxWidth="sm">
      <ListHeader loading={loading} date={date} />
      <ListWrapper maxWidth="sm">
        <ListBody loading={loading} />
      </ListWrapper>
    </Wrapper>
  )
}
