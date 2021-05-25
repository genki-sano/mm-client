import { Controller, UseFormMethods } from 'react-hook-form'
import styled from 'styled-components'
import { NumberField } from 'components/01_atoms/NumberField'
import { PaymentCreateForm } from 'components/05_pages/Create'
import { theme } from 'lib/theme'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`
const IconWapper = styled.div`
  display: inline-flex;
  min-width: ${`${theme.spacing(5)}px`};
  padding-top: ${`${theme.spacing(2)}px`};
  padding-right: ${`${theme.spacing(1)}px`};
  padding-left: ${`${theme.spacing(1)}px`};
  font-size: ${theme.typography.h4.fontSize};
`
const UnitItem = styled(NumberField)`
  font-size: ${theme.typography.h3.fontSize};
`

interface Props {
  control: UseFormMethods<PaymentCreateForm>['control']
  togglePannelOpen: (b: boolean) => void
  setPannelType: (s: string) => void
}

export const PriceInput: React.FC<Props> = ({
  control,
  togglePannelOpen,
  setPannelType,
}) => {
  return (
    <Wrapper>
      <IconWapper>¥</IconWapper>
      <Controller
        control={control}
        name="price"
        rules={{ required: true }}
        render={({ value, onChange }) => (
          <UnitItem
            onChange={onChange}
            value={value}
            thousandSeparator
            readOnly
            onClick={() => {
              togglePannelOpen(true)
              setPannelType('price')
            }}
          />
        )}
      />
    </Wrapper>
  )
}
