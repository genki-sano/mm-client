import React from 'react'
import { Controller, UseFormMethods } from 'react-hook-form'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person'
import { TextField } from 'components/01_atoms/TextField'
import { PaymentCreateForm } from 'components/05_pages/Create'
import { NormalizedUsers } from 'lib/store/slices/entities'
import { theme } from 'lib/theme'

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: ${theme.spacing(1, 2)};
  text-align: left;
  text-decoration: none;
`
const IconWapper = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  min-width: ${`${theme.spacing(6)}px`};
  color: rgba(0, 0, 0, 0.54);
`
const InputWapper = styled.div`
  width: 100%;
  margin-top: ${`${theme.spacing(0.5)}px`};
  margin-bottom: ${`${theme.spacing(0.5)}px`};
`

interface Props {
  control: UseFormMethods<PaymentCreateForm>['control']
  togglePannelOpen: (b: boolean) => void
  setPannelType: (s: string) => void
  users: NormalizedUsers
}

export const UserInput: React.FC<Props> = ({
  control,
  togglePannelOpen,
  setPannelType,
  users,
}) => {
  return (
    <Wrapper>
      <IconWapper>
        <PersonIcon />
      </IconWapper>
      <InputWapper>
        <Controller
          control={control}
          name="user"
          rules={{ required: true }}
          render={({ value, onChange }) => (
            <TextField
              value={value === 'man' ? users.man.name : users.woman.name}
              onChange={onChange}
              readOnly
              onClick={() => {
                togglePannelOpen(true)
                setPannelType('user')
              }}
            />
          )}
        />
      </InputWapper>
    </Wrapper>
  )
}
