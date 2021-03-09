import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import { theme } from 'lib/theme'

const Wrapper = styled(Container)`
  padding-top: ${`${theme.spacing(3)}px`};
  padding-bottom: ${`${theme.spacing(3)}px`};
`

export const LoadingPage: React.FC = () => {
  return (
    <Wrapper maxWidth="sm">
      <CircularProgress />
    </Wrapper>
  )
}
