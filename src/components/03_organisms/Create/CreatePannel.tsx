import React from 'react'
import { UseFormMethods } from 'react-hook-form'
import styled from 'styled-components'
import { CategoryPannel } from 'components/03_organisms/Create/CreatePannel/CategoryPannel'
import { UserPannel } from 'components/03_organisms/Create/CreatePannel/UserPannel'
import { PaymentPannel } from 'components/03_organisms/Create/CreatePannel/PaymentPannel'
import { PaymentCreateForm } from 'components/05_pages/Create'
import { NormalizedUsers } from 'lib/store/slices/entities'
import { theme } from 'lib/theme'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: ${theme.zIndex.drawer};
  width: 100%;
  height: 320px;
  background-color: ${theme.palette.primary.main};
  @media (min-width: 600px) {
    max-width: 600px;
  }
`
const PanelBotton = styled.div`
  width: 100%;
  height: ${`${theme.spacing(7)}px`};
  font-size: 16px;
  line-height: ${`${theme.spacing(7)}px`};
  color: ${theme.palette.primary.contrastText};
  text-align: center;
  cursor: pointer;
  background-color: ${theme.palette.primary.dark};
`

interface Props {
  setValue: UseFormMethods<PaymentCreateForm>['setValue']
  watch: UseFormMethods<PaymentCreateForm>['watch']
  isPannelOpen: boolean
  pannelType: string
  togglePannelOpen: (b: boolean) => void
  users: NormalizedUsers
}

export const CreatePannel: React.FC<Props> = ({
  setValue,
  watch,
  isPannelOpen,
  pannelType,
  togglePannelOpen,
  users,
}) => {
  if (!isPannelOpen) {
    return <></>
  }
  return (
    <Wrapper>
      {(() => {
        if (pannelType === 'user') {
          return <UserPannel watch={watch} setValue={setValue} users={users} />
        } else if (pannelType === 'category') {
          return <CategoryPannel watch={watch} setValue={setValue} />
        } else {
          return <PaymentPannel watch={watch} setValue={setValue} />
        }
      })()}
      <PanelBotton onClick={() => togglePannelOpen(false)}>
        確認する
      </PanelBotton>
    </Wrapper>
  )
}
