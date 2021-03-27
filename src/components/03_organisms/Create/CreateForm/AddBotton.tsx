import React from 'react'
import { UseFormMethods } from 'react-hook-form'
import styled from 'styled-components'
import { PaymentCreateForm } from 'components/05_pages/CreatePage'
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

interface Props {
  watch: UseFormMethods<PaymentCreateForm>['watch']
}

export const AddBotton: React.FC<Props> = ({ watch }) => {
  if (watch('price') === 0) {
    return <Wrapper disabled>金額を入力してください</Wrapper>
  }
  return <Wrapper type="submit">登録する</Wrapper>
}
