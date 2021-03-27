import React from 'react'
import { UseFormMethods } from 'react-hook-form'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import { AddBotton } from 'components/03_organisms/Create/CreateForm/AddBotton'
import { PriceInput } from 'components/03_organisms/Create/CreateForm/PriceInput'
import { CategoryInput } from 'components/03_organisms/Create/CreateForm/CategoryInput'
import { DateInput } from 'components/03_organisms/Create/CreateForm/DateInput'
import { UserInput } from 'components/03_organisms/Create/CreateForm/UserInput'
import { MemoInput } from 'components/03_organisms/Create/CreateForm/MemoInput'
import { PaymentCreateForm } from 'components/05_pages/CreatePage'
import { NormalizedUsers } from 'lib/store/slices/entities'
import { theme } from 'lib/theme'

const TopSection = styled.section`
  padding: ${theme.spacing(2, 2, 0)};
`

const BottomSection = styled.section`
  padding: ${theme.spacing(2, 1)};
`

interface Props {
  watch: UseFormMethods<PaymentCreateForm>['watch']
  control: UseFormMethods<PaymentCreateForm>['control']
  handleSubmit: React.FormEventHandler
  togglePannelOpen: (b: boolean) => void
  setPannelType: (s: string) => void
  users: NormalizedUsers
}

export const CreateForm: React.FC<Props> = ({
  watch,
  control,
  handleSubmit,
  togglePannelOpen,
  setPannelType,
  users,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TopSection>
          <PriceInput
            control={control}
            togglePannelOpen={togglePannelOpen}
            setPannelType={setPannelType}
          />
        </TopSection>

        <Divider />

        <BottomSection>
          <CategoryInput
            watch={watch}
            control={control}
            togglePannelOpen={togglePannelOpen}
            setPannelType={setPannelType}
          />
          <DateInput
            control={control}
            togglePannelOpen={togglePannelOpen}
            setPannelType={setPannelType}
          />
          <UserInput
            control={control}
            togglePannelOpen={togglePannelOpen}
            setPannelType={setPannelType}
            users={users}
          />
          <MemoInput
            control={control}
            togglePannelOpen={togglePannelOpen}
            setPannelType={setPannelType}
          />
        </BottomSection>

        <AddBotton watch={watch} />
      </div>
    </form>
  )
}
