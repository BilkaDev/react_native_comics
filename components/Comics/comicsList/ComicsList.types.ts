import { ComicsBasicType } from '../../../api/comics'

export type ComicsListProps = {
  comics: ComicsBasicType[]
  isFetchingNextPage: boolean
  fetchNextPage: () => void
}
