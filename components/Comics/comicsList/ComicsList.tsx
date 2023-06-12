import { FlatList, Text } from 'react-native'

import { RenderComicsBasic } from '../renderComicsBasic/RenderComicsBasic'

import { styles } from './ComicsList.styles'
import { ComicsListProps } from './ComicsList.types'

export const ComicsList = ({ comics, isFetchingNextPage, fetchNextPage }: ComicsListProps) => {
  return (
    <FlatList
      style={styles.container}
      data={comics}
      renderItem={RenderComicsBasic}
      keyExtractor={(item) => item.id}
      onEndReached={() => fetchNextPage()}
      onEndReachedThreshold={0.25}
      ListFooterComponent={isFetchingNextPage ? <Text>Loading more...</Text> : null}
    ></FlatList>
  )
}
