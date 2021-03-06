import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { theme } from 'lib/theme'

const Wrapper = styled(Container)`
  padding-top: ${`${theme.spacing(3)}px`};
  padding-bottom: ${`${theme.spacing(3)}px`};
`

export const ErrorPage: React.FC = () => {
  return (
    <Wrapper maxWidth="sm">
      <Typography variant="h2" component="h1" color="primary" gutterBottom>
        403 Error
      </Typography>
      <Typography>許可されていません。アクセスが拒否されました。</Typography>
    </Wrapper>
  )
}
