import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CreateTemplate } from 'components/04_templates/CreateTemplate'
import { ErrorPage } from 'components/05_pages/ErrorPage'
import { RootState, useSelector } from 'lib/store'
import { getAuthUser } from 'lib/service/user'
import { Category, UserType } from 'lib/store/slices/entities'

export interface PaymentCreateForm {
  user: UserType
  category: Category
  price: number
  date: Date
  memo: string
}

export const CreatePage: React.FC = () => {
  const authUserId = useSelector((store: RootState) => store.appAuth.authUserId)
  const users = useSelector((store: RootState) => store.entities.users)

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
  const onSubmit = handleSubmit((data: PaymentCreateForm) => console.log(data))

  const [isPannelOpen, togglePannelOpen] = useState<boolean>(true)
  const [pannelType, setPannelType] = useState<string>('price')

  if (!users) {
    return <ErrorPage />
  }

  return (
    <CreateTemplate
      setValue={setValue}
      watch={watch}
      control={control}
      handleSubmit={onSubmit}
      isPannelOpen={isPannelOpen}
      togglePannelOpen={togglePannelOpen}
      pannelType={pannelType}
      setPannelType={setPannelType}
      users={users}
    />
  )
}
