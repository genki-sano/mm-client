import styled from 'styled-components'
import { DatePicker as Wrapper, DatePickerProps } from '@material-ui/pickers'

const TextField = styled.input`
  box-sizing: content-box;
  width: 100%;
  height: 1.1876em;
  padding: 6px 0 7px;
  margin: 0;
  font-family: inherit;
  font-size: 1rem;
  color: currentColor;
  background: none;
  border: 0;
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
