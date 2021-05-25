import styled from 'styled-components'
import { CategoryIcon } from 'components/01_atoms/CategoryIcon'
import { Category } from 'lib/store/slices/entities'
import { theme } from 'lib/theme'

const PannelItem = styled.div`
  width: 100%;
  height: ${`${theme.spacing(8)}px`};
  padding: 6px;
  text-align: center;
  cursor: pointer;
  user-select: none;
`
const PannelItemSelect = styled(PannelItem)`
  background-color: ${theme.palette.primary.dark};
  border-radius: ${`${theme.shape.borderRadius}px`};
`
const IconWapper = styled.div`
  font-size: 32px;
  line-height: 1;
  color: ${theme.palette.primary.contrastText};
`
const Typography = styled.span`
  font-size: 12px;
  color: ${theme.palette.primary.contrastText};
`

interface Props {
  category: Category
  setCategory: (s: Category) => void
  text: Category
  altText?: string
}

export const CategoryButton: React.FC<Props> = ({
  category,
  setCategory,
  text,
  altText,
}) => {
  if (category === text) {
    return (
      <PannelItemSelect onClick={() => setCategory(text)}>
        <IconWapper>
          <CategoryIcon category={text} />
        </IconWapper>
        <Typography>{altText || text}</Typography>
      </PannelItemSelect>
    )
  }

  return (
    <PannelItem onClick={() => setCategory(text)}>
      <IconWapper>
        <CategoryIcon category={text} />
      </IconWapper>
      <Typography>{altText || text}</Typography>
    </PannelItem>
  )
}
