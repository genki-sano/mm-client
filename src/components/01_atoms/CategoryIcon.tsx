import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import CategoryItemIcon from '@material-ui/icons/Category'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ForumIcon from '@material-ui/icons/Forum'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import HomeIcon from '@material-ui/icons/Home'
import InvertColorsIcon from '@material-ui/icons/InvertColors'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import TrainIcon from '@material-ui/icons/Train'
import WeekendIcon from '@material-ui/icons/Weekend'
import WifiIcon from '@material-ui/icons/Wifi'
import { Category } from 'lib/store/slices/entities'

interface Props {
  category: Category
}

export const CategoryIcon: React.VFC<Props> = ({ category }) => {
  if (category === '食費') {
    return <RestaurantIcon />
  }

  if (category === '日用品') {
    return <CategoryItemIcon />
  }

  if (category === '交通費') {
    return <TrainIcon />
  }

  if (category === '趣味') {
    return <StarBorderIcon />
  }

  if (category === '家具・家電') {
    return <WeekendIcon />
  }

  if (category === '交際費') {
    return <ForumIcon />
  }

  if (category === '教養・教育') {
    return <MenuBookIcon />
  }

  if (category === '健康・医療') {
    return <FavoriteBorderIcon />
  }

  if (category === '金融') {
    return <AccountBalanceIcon />
  }

  if (category === '住宅') {
    return <HomeIcon />
  }

  if (category === '水道・光熱費') {
    return <InvertColorsIcon />
  }

  if (category === '通信費') {
    return <WifiIcon />
  }

  if (category === '税金') {
    return <AttachMoneyIcon />
  }

  if (category === '自動車') {
    return <DirectionsCarIcon />
  }

  return <HelpOutlineIcon />
}
