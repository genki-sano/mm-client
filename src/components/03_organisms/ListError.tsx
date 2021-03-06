import React from 'react'
import styled from 'styled-components'
import Alert from '@material-ui/lab/Alert'
import { theme } from 'lib/theme'

const Wrapper = styled(Alert)`
  margin-top: ${`${theme.spacing(3)}px`};
`

interface Props {
  massage: string
}

export const ListError: React.FC<Props> = ({ massage }) => {
  return <Wrapper severity="error">{massage}</Wrapper>
}
