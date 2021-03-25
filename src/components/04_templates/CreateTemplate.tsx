import React from 'react'
import { UseFormMethods } from 'react-hook-form'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import { NormalizedUsers } from 'lib/store/slices/entities'
import { theme } from 'lib/theme'
import { CreateHeader } from 'components/03_organisms/Create/CreateHeader'
import { CreateForm } from 'components/03_organisms/Create/CreateForm'
import { CreatePannel } from 'components/03_organisms/Create/CreatePannel'
import { PaymentCreateForm } from 'components/05_pages/CreatePage'

const Wrapper = styled(Container)`
  min-height: 100vh;
  min-width: 310px;
  padding-top: 0;
  padding-bottom: ${`${theme.spacing(7)}px`};
  padding-right: 0;
  padding-left: 0;
  background-color: ${theme.palette.background.paper};
`

interface Props {
  setValue: UseFormMethods<PaymentCreateForm>['setValue']
  watch: UseFormMethods<PaymentCreateForm>['watch']
  control: UseFormMethods<PaymentCreateForm>['control']
  handleSubmit: React.FormEventHandler
  isPannelOpen: boolean
  pannelType: string
  togglePannelOpen: (b: boolean) => void
  setPannelType: (s: string) => void
  users: NormalizedUsers
}

export const CreateTemplate: React.FC<Props> = ({
  setValue,
  watch,
  control,
  handleSubmit,
  isPannelOpen,
  togglePannelOpen,
  pannelType,
  setPannelType,
  users,
}) => {
  return (
    <Wrapper maxWidth="sm">
      <CreateHeader />
      <CreateForm
        watch={watch}
        handleSubmit={handleSubmit}
        control={control}
        togglePannelOpen={togglePannelOpen}
        setPannelType={setPannelType}
        users={users}
      />
      <CreatePannel
        setValue={setValue}
        watch={watch}
        isPannelOpen={isPannelOpen}
        togglePannelOpen={togglePannelOpen}
        pannelType={pannelType}
        users={users}
      />
    </Wrapper>
  )
}
