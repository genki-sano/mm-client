import React from 'react'
import styled from 'styled-components'
import { DatePicker as Wrapper, DatePickerProps } from '@material-ui/pickers'

const TextField = styled.input`
  font-size: 1rem;
  font-family: inherit;
  color: currentColor;
  border: 0;
  height: 1.1876em;
  width: 100%;
  margin: 0;
  padding: 6px 0 7px;
  background: none;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: 0;
  }
`

interface Props extends DatePickerProps {}

export const DatePicker: React.VFC<Props> = ({ onChange, value, ...props }) => {
  return (
    <Wrapper
      onChange={onChange}
      value={value}
      TextFieldComponent={({ value, onClick, onChange }) => {
        return (
          <TextField
            type="text"
            readOnly
            value={value as string}
            onClick={onClick}
            onChange={onChange}
          />
        )
      }}
      {...props}
    />
  )
}
