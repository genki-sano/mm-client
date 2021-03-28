import React from 'react'
import { Redirect } from 'react-router'
import { format } from 'date-fns'

export const IndexPage: React.FC = () => {
  const formatDate = format(new Date(), 'yyyyMM')
  const to = {
    pathname: `/list/${formatDate}`,
  }

  return <Redirect to={to} />
}
