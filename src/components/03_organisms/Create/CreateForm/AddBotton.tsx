import React from 'react'
import styled from 'styled-components'
import { theme } from 'lib/theme'

const Wrapper = styled.button`
  height: ${`${theme.spacing(7)}px`};
  line-height: ${`${theme.spacing(7)}px`};
  width: 100%;
  font-size: 16px;
  color: ${theme.palette.primary.contrastText};
  background-color: ${theme.palette.primary.main};
  text-align: center;
  cursor: pointer;
  position: fixed;
  bottom: 0;
  border: 0;
  margin: 0;
  padding: 0;
  @media (min-width: 600px) {
    max-width: 600px;
  }
  &:focus {
    outline: 0;
  }
`

export const AddBotton: React.FC = () => {
  return <Wrapper type="submit">登録する</Wrapper>
}
