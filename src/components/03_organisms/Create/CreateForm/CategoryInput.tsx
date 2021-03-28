import React from 'react'
import { Controller, UseFormMethods } from 'react-hook-form'
import styled from 'styled-components'
import { TextField } from 'components/01_atoms/TextField'
import { PaymentCreateForm } from 'components/05_pages/Create'
import { CategoryIcon } from 'components/01_atoms/CategoryIcon'
import { theme } from 'lib/theme'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  padding: ${theme.spacing(1, 2)};
`
const IconWapper = styled.div`
  color: rgba(0, 0, 0, 0.54);
  display: inline-flex;
  min-width: ${`${theme.spacing(6)}px`};
  flex-shrink: 0;
`
const InputWapper = styled.div`
  margin-top: ${`${theme.spacing(0.5)}px`};
  margin-bottom: ${`${theme.spacing(0.5)}px`};
  width: 100%;
`

interface Props {
  watch: UseFormMethods<PaymentCreateForm>['watch']
  control: UseFormMethods<PaymentCreateForm>['control']
  togglePannelOpen: (b: boolean) => void
  setPannelType: (s: string) => void
}

export const CategoryInput: React.FC<Props> = ({
  watch,
  control,
  togglePannelOpen,
  setPannelType,
}) => {
  return (
    <Wrapper>
      <IconWapper>
        <CategoryIcon category={watch('category')} />
      </IconWapper>
      <InputWapper>
        <Controller
          control={control}
          name="category"
          rules={{ required: true }}
          render={({ value, onChange }) => (
            <TextField
              value={value}
              onChange={onChange}
              readOnly
              onClick={() => {
                togglePannelOpen(true)
                setPannelType('category')
              }}
            />
          )}
        />
      </InputWapper>
    </Wrapper>
  )
}
