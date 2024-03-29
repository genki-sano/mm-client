import { UseFormMethods } from 'react-hook-form'
import styled from 'styled-components/macro'
import Backdrop from '@material-ui/core/Backdrop'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import { NormalizedUsers } from 'lib/store/slices/entities'
import { theme } from 'lib/theme'
import { CreateHeader } from 'components/03_organisms/Create/CreateHeader'
import { CreateForm } from 'components/03_organisms/Create/CreateForm'
import { CreatePannel } from 'components/03_organisms/Create/CreatePannel'
import { PaymentCreateForm } from 'components/05_pages/Create'

const Wrapper = styled(Container)`
  min-width: 310px;
  min-height: 100vh;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: ${`${theme.spacing(7)}px`};
  padding-left: 0;
  background-color: ${theme.palette.background.paper};
`
const Drawer = styled(Backdrop)`
  z-index: ${theme.zIndex.drawer};
  color: #fff;
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
  loading: boolean
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
  loading,
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
      <Drawer open={loading}>
        <CircularProgress color="inherit" />
      </Drawer>
    </Wrapper>
  )
}
