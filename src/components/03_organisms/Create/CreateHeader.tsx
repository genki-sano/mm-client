import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { theme } from 'lib/theme'

const ArrowBackIconButton = styled(IconButton)`
  margin-right: ${`${theme.spacing(2)}px`};
`
const IconLink = styled(Link)`
  width: ${`${theme.spacing(3)}px`};
  height: ${`${theme.spacing(3)}px`};
  color: ${theme.palette.primary.contrastText};
`

export const CreateHeader: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <ArrowBackIconButton color="inherit" edge="start" aria-label="back">
          <IconLink to={'/'}>
            <ArrowBackIcon />
          </IconLink>
        </ArrowBackIconButton>
        <Typography variant="h6">新規登録</Typography>
      </Toolbar>
    </AppBar>
  )
}
