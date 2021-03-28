import React from 'react'
import { ErrorTemplate } from 'components/04_templates/Error'

export const NotFoundPage: React.FC = () => {
  return (
    <ErrorTemplate
      title="404 Error"
      discription="ページが見つかりませんでした。"
    />
  )
}
