import { FlatList, Text, View } from 'react-native'

import { useComics } from '../../api/comics/hooks'
import { RenderComicsBasic } from '../../components/Comics/renderComicsBasic/RenderComicsBasic'
import { SelectComics } from '../../components/SelectComics/SelectComics'

import { styles } from './Dashboard.styles'

export const Dashboard = () => {
  const { comics, fetchNextPage, isFetchingNextPage, setDomain } = useComics()
  if (comics.length === 0) return null
  return (
    <View style={styles.container}>
      <SelectComics onClick={setDomain} />
      <FlatList
        data={comics}
        renderItem={RenderComicsBasic}
        keyExtractor={(item) => item.id}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.25}
        ListFooterComponent={isFetchingNextPage ? <Text>Loading more...</Text> : null}
      ></FlatList>
    </View>
  )
}
