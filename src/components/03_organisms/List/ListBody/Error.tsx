import styled from 'styled-components/macro'
import Alert from '@material-ui/lab/Alert'
import { theme } from 'lib/theme'

const Wrapper = styled(Alert)`
  margin-top: ${`${theme.spacing(3)}px`};
`

interface Props {
  massage: string
}

export const ListBodyError: React.FC<Props> = ({ massage }) => {
  return <Wrapper severity="error">{massage}</Wrapper>
}
