import NumberFormat, { NumberFormatProps } from 'react-number-format'
import { TextField } from 'components/01_atoms/TextField'

interface Props extends NumberFormatProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
}

export const NumberField: React.VFC<Props> = ({
  onChange,
  value,
  ...props
}) => {
  return (
    <NumberFormat
      onChange={onChange}
      value={value}
      customInput={(props) => {
        return (
          <TextField onChange={props.onChange} value={props.value} {...props} />
        )
      }}
      {...props}
    />
  )
}
