import React from 'react'
import { Link } from 'react-router-dom'
import { LocationDescriptor } from 'history'
import { format } from 'date-fns'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { NormalizedTotals } from 'lib/store/slices/app/list'
import { NormalizedUsers } from 'lib/store/slices/entities'
import { numberWithDelimiter } from 'lib/util/number'
import { theme } from 'lib/theme'

const TitleText = styled(Typography)`
  flex-grow: 1;
`
const IconLink = styled(Link)`
  height: ${`${theme.spacing(3)}px`};
  width: ${`${theme.spacing(3)}px`};
  color: ${theme.palette.primary.contrastText};
`
const Wrapper = styled(Grid)`
  padding: ${theme.spacing(2, 1)};
  text-align: center;
  color: ${theme.palette.primary.contrastText};
  background-color: ${theme.palette.primary.main};
`
const PriceText = styled(Typography)`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: bold;
  margin-right: ${`${theme.spacing(1)}px`};
`

interface Props {
  loading: boolean
  users: NormalizedUsers | null
  totals: NormalizedTotals | null
  formatType: string
  startDate: Date
  endDate: Date
  lastTo: LocationDescriptor
  nextTo: LocationDescriptor
}

export const ListHeaderPresenter: React.FC<Props> = (props) => {
  const {
    loading,
    users,
    totals,
    formatType,
    startDate,
    endDate,
    lastTo,
    nextTo,
  } = props

  const formatStartDate = format(startDate, formatType)
  const formatEndDate = format(endDate, formatType)

  return (
    <div>
      <AppBar position="static" component="div">
        <Toolbar>
          <IconButton aria-label="last" color="inherit">
            <IconLink to={lastTo}>
              <NavigateBeforeIcon />
            </IconLink>
          </IconButton>
          <TitleText noWrap align="center">
            {`${formatStartDate} - ${formatEndDate}`}
          </TitleText>
          <IconButton aria-label="next" color="inherit">
            <IconLink to={nextTo}>
              <NavigateNextIcon />
            </IconLink>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Wrapper container>
        <Grid item xs={6}>
          <Typography>{users?.woman.name || '花子'}</Typography>
          <PriceText>
            {loading ? '-' : numberWithDelimiter(totals?.woman.amounts || 0)}
          </PriceText>
          円
        </Grid>
        <Grid item xs={6}>
          <Typography>{users?.man.name || '太郎'}</Typography>
          <PriceText>
            {loading ? '-' : numberWithDelimiter(totals?.man.amounts || 0)}
          </PriceText>
          円
        </Grid>
      </Wrapper>
    </div>
  )
}
