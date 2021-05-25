import { UseFormMethods } from 'react-hook-form'
import styled from 'styled-components/macro'
import Grid from '@material-ui/core/Grid'
import { CategoryButton } from 'components/02_molecules/CategoryButton'
import { PaymentCreateForm } from 'components/05_pages/Create'
import { Category } from 'lib/store/slices/entities'

const Wrapper = styled(Grid)`
  height: 264px;
  padding: 4px;
`

interface Props {
  watch: UseFormMethods<PaymentCreateForm>['watch']
  setValue: UseFormMethods<PaymentCreateForm>['setValue']
}

export const CategoryPannel: React.FC<Props> = ({ watch, setValue }) => {
  const setCategory = (category: Category) => {
    setValue('category', category)
  }
  const category = watch('category')

  return (
    <Wrapper container>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="食費"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="日用品"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="家具・家電"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="交通費"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="趣味"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="交際費"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="教養・教育"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="健康・医療"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="住宅"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="水道・光熱費"
          altText="水道光熱費"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="通信費"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="自動車"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="金融"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="税金"
        />
      </Grid>
      <Grid item xs={3}>
        <CategoryButton
          category={category}
          setCategory={setCategory}
          text="その他"
        />
      </Grid>
    </Wrapper>
  )
}
