import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { RootState, useSelector } from 'lib/store'
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
  date: string
}

export const ListHeader: React.FC<Props> = ({ loading, date }) => {
  const users = useSelector((store: RootState) => store.entities.users)
  const totals = useSelector((store: RootState) => store.appList.totals)

  const startDate = moment(date).format('YYYY/MM/01')
  const endDate = moment(date).endOf('month').format('YYYY/MM/DD')

  const lastMonth = moment(date).subtract(1, 'month').format('YYYYMM')
  const nextMonth = moment(date).add(1, 'month').format('YYYYMM')

  const lastTo = {
    pathname: `/list/${lastMonth}`,
  }
  const nextTo = {
    pathname: `/list/${nextMonth}`,
  }
  return (
    <div>
      <AppBar position="static" component="div">
        <Toolbar>
          <IconButton aria-label="last" color="inherit">
            <IconLink to={lastTo}>
              <NavigateBeforeIcon />
            </IconLink>
          </IconButton>
          <TitleText
            noWrap
            align="center"
          >{`${startDate} - ${endDate}`}</TitleText>
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
