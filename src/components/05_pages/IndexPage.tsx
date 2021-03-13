import React from 'react'
import { Redirect } from 'react-router'
import moment from 'moment'

export const IndexPage: React.FC = () => {
  const formatDate = moment().format('YYYYMM')
  const to = {
    pathname: `/list/${formatDate}`,
  }

  return <Redirect to={to} />
}
