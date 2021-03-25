import React from 'react'
import { UseFormMethods } from 'react-hook-form'
import styled from 'styled-components'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import { PaymentCreateForm } from 'components/05_pages/CreatePage'
import { theme } from 'lib/theme'

const Wrapper = styled.div`
  padding: 4px;
`
const PannelItem = styled.div`
  display: inline-block;
  height: ${`${theme.spacing(8)}px`};
  width: calc(100% / 3);
  line-height: ${`${theme.spacing(8)}px`};
  text-align: center;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`
const Typography = styled.span`
  font-size: 32px;
  color: ${theme.palette.primary.contrastText};
`

interface Props {
  watch: UseFormMethods<PaymentCreateForm>['watch']
  setValue: UseFormMethods<PaymentCreateForm>['setValue']
}

export const PaymentPannel: React.FC<Props> = ({ watch, setValue }) => {
  const setPrice = (price: number) => {
    setValue('price', price)
  }
  const price = watch('price')

  const updatePrice = (item: string): void => {
    const number = parseInt(String(price) + item, 10)
    if (String(number).length > 9) {
      return
    }
    setPrice(number || 0)
  }
  const deletePrice = (): void => {
    const backed = String(price).slice(0, -1)
    const number = parseInt(backed, 10)
    setPrice(number || 0)
  }
  return (
    <Wrapper>
      <PannelItem onClick={() => updatePrice('7')}>
        <Typography>7</Typography>
      </PannelItem>
      <PannelItem onClick={() => updatePrice('8')}>
        <Typography>8</Typography>
      </PannelItem>
      <PannelItem onClick={() => updatePrice('9')}>
        <Typography>9</Typography>
      </PannelItem>
      <PannelItem onClick={() => updatePrice('4')}>
        <Typography>4</Typography>
      </PannelItem>
      <PannelItem onClick={() => updatePrice('5')}>
        <Typography>5</Typography>
      </PannelItem>
      <PannelItem onClick={() => updatePrice('6')}>
        <Typography>6</Typography>
      </PannelItem>
      <PannelItem onClick={() => updatePrice('1')}>
        <Typography>1</Typography>
      </PannelItem>
      <PannelItem onClick={() => updatePrice('2')}>
        <Typography>2</Typography>
      </PannelItem>
      <PannelItem onClick={() => updatePrice('3')}>
        <Typography>3</Typography>
      </PannelItem>
      <PannelItem onClick={() => updatePrice('00')}>
        <Typography>00</Typography>
      </PannelItem>
      <PannelItem onClick={() => updatePrice('0')}>
        <Typography>0</Typography>
      </PannelItem>
      <PannelItem onClick={() => deletePrice()}>
        <Typography>
          <KeyboardBackspaceIcon />
        </Typography>
      </PannelItem>
    </Wrapper>
  )
}
