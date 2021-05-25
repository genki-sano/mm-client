import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

const Wrapper = styled.div`
  display: table;
  width: 100%;
  height: 10rem;
  text-align: center;
`
const Inner = styled.div`
  display: table-cell;
  vertical-align: middle;
`

export const ListBodyLoading: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <CircularProgress />
      </Inner>
    </Wrapper>
  )
}
