import styled from 'styled-components'

const Wrapper = styled.input`
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

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
}

export const TextField: React.VFC<Props> = ({ onChange, value, ...props }) => {
  return <Wrapper type="text" onChange={onChange} value={value} {...props} />
}
