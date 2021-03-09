import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import { theme } from 'lib/theme'

const Wrapper = styled(Container)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CircularWrapper = styled.div`
  text-align: center;
`
const LoginTypography = styled(Typography)`
  color: ${theme.palette.grey[600]};
  padding-top: ${`${theme.spacing(1)}px`};
  padding-bottom: ${`${theme.spacing(1)}px`};
`

export const LoadingPage: React.FC = () => {
  return (
    <Wrapper maxWidth="sm">
      <CircularWrapper>
        <CircularProgress />
        <LoginTypography>ログイン中</LoginTypography>
      </CircularWrapper>
    </Wrapper>
  )
}
