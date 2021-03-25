import React from 'react'
import { Controller, UseFormMethods } from 'react-hook-form'
import styled from 'styled-components'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import { DatePicker } from 'components/01_atoms/DatePicker'
import { PaymentCreateForm } from 'components/05_pages/CreatePage'
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
  control: UseFormMethods<PaymentCreateForm>['control']
  togglePannelOpen: (b: boolean) => void
  setPannelType: (s: string) => void
}

export const DateInput: React.FC<Props> = ({
  control,
  togglePannelOpen,
  setPannelType,
}) => {
  return (
    <Wrapper>
      <IconWapper>
        <CalendarTodayIcon />
      </IconWapper>
      <InputWapper>
        <Controller
          control={control}
          name="date"
          rules={{ required: true }}
          render={({ value, onChange }) => (
            <DatePicker
              onChange={onChange}
              value={value}
              autoOk
              disableFuture
              format="M月d日(eee)"
              minDate={new Date('2020-09-01')}
              onClick={() => {
                togglePannelOpen(false)
                setPannelType('other')
              }}
            />
          )}
        />
      </InputWapper>
    </Wrapper>
  )
}
