import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { theme } from 'lib/theme'

const Wrapper = styled(Container)`
  padding-top: ${`${theme.spacing(3)}px`};
  padding-bottom: ${`${theme.spacing(3)}px`};
`

interface Props {
  title: string
  discription: string
}

export const ErrorTemplate: React.FC<Props> = ({ title, discription }) => {
  return (
    <Wrapper maxWidth="sm">
      <Typography variant="h2" component="h1" color="primary" gutterBottom>
        {title}
      </Typography>
      <Typography>{discription}</Typography>
    </Wrapper>
  )
}
