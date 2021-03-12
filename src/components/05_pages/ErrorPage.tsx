import React from 'react'
import { ErrorTemplate } from 'components/04_templates/ErrorTemplate'

export const ErrorPage: React.FC = () => {
  return (
    <ErrorTemplate
      title="403 Error"
      discription="許可されていません。アクセスが拒否されました。"
    />
  )
}
