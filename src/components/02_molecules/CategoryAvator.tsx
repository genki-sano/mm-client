import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import { CategoryIcon } from 'components/01_atoms/CategoryIcon'
import { UserType } from 'lib/store/slices/entities'
import { theme } from 'lib/theme'

const WomanWrapper = styled(Avatar)`
  background-color: ${theme.palette.secondary.main};
`
const ManWrapper = styled(Avatar)`
  background-color: ${theme.palette.primary.main};
`

interface Props {
  userType: UserType
  category: string
}

export const CategoryAvator: React.FC<Props> = ({ userType, category }) => {
  if (userType === 'man') {
    return (
      <ManWrapper>
        <CategoryIcon category={category} />
      </ManWrapper>
    )
  }
  return (
    <WomanWrapper>
      <CategoryIcon category={category} />
    </WomanWrapper>
  )
}
