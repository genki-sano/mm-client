import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { format } from 'date-fns'
import { CreateTemplate } from 'components/04_templates/Create'
import { useDispatch, useSelector } from 'lib/hooks'
import { getAuthUser } from 'lib/service/user'
import { onSubmit } from 'lib/service/create'
import { Category, UserType } from 'lib/store/slices/entities'

export interface PaymentCreateForm {
  user: UserType
  category: Category
  price: number
  date: Date
  memo: string
}

export const CreatePage: React.FC = () => {
  const authUserId = useSelector((store) => store.appAuth.authUserId)
  const users = useSelector((store) => store.entities.users)
  const loading = useSelector((store) => store.appCreate.loading)

  const defaultValues: PaymentCreateForm = {
    user: getAuthUser(users, authUserId) || 'woman',
    category: 'その他',
    price: 0,
    date: new Date(),
    memo: '',
  }
  const useFormOptions = {
    defaultValues,
  }
  const { setValue, watch, handleSubmit, control } = useForm<PaymentCreateForm>(
    useFormOptions,
  )

  const dispatch = useDispatch()
  const history = useHistory()
  const onPaymentSubmit = handleSubmit(async (data: PaymentCreateForm) => {
    await dispatch(
      onSubmit(data.user, data.category, data.price, data.date, data.memo),
    )
    const formatMonth = format(data.date, 'yyyyMM')
    await history.push(`/list/${formatMonth}`)
  })

  const [isPannelOpen, togglePannelOpen] = useState<boolean>(true)
  const [pannelType, setPannelType] = useState<string>('price')

  if (!users) {
    return null
  }

  return (
    <CreateTemplate
      setValue={setValue}
      watch={watch}
      control={control}
      handleSubmit={onPaymentSubmit}
      isPannelOpen={isPannelOpen}
      togglePannelOpen={togglePannelOpen}
      pannelType={pannelType}
      setPannelType={setPannelType}
      users={users}
      loading={loading}
    />
  )
}
