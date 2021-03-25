import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.input`
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

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
}

export const TextField: React.VFC<Props> = ({ onChange, value, ...props }) => {
  return <Wrapper type="text" onChange={onChange} value={value} {...props} />
}
