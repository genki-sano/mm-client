import { UseFormMethods } from 'react-hook-form'
import styled from 'styled-components/macro'
import { PaymentCreateForm } from 'components/05_pages/Create'
import { theme } from 'lib/theme'

const Wrapper = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${`${theme.spacing(7)}px`};
  padding: 0;
  margin: 0;
  font-size: 16px;
  line-height: ${`${theme.spacing(7)}px`};
  color: ${theme.palette.primary.contrastText};
  text-align: center;
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  border: 0;
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
  if (watch('memo') === '') {
    return <Wrapper disabled>メモを入力してください</Wrapper>
  }
  return <Wrapper type="submit">登録する</Wrapper>
}
