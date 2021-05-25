import styled from 'styled-components/macro'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import { theme } from 'lib/theme'

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`
const CircularWrapper = styled.div`
  text-align: center;
`
const LoginTypography = styled(Typography)`
  padding-top: ${`${theme.spacing(1)}px`};
  padding-bottom: ${`${theme.spacing(1)}px`};
  color: ${theme.palette.grey[600]};
`

interface Props {
  discription: string
}

export const LoadingTemplate: React.FC<Props> = ({ discription }) => {
  return (
    <Wrapper maxWidth="sm">
      <CircularWrapper>
        <CircularProgress />
        <LoginTypography>{discription}</LoginTypography>
      </CircularWrapper>
    </Wrapper>
  )
}
