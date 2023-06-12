import { View } from 'react-native'

import { useComics } from '../../api/comics/hooks'
import { ComicsList } from '../../components/Comics/comicsList/ComicsList'
import { SelectComics } from '../../components/SelectComics/SelectComics'

import { styles } from './Dashboard.styles'

export const Dashboard = () => {
  const { comics, fetchNextPage, isFetchingNextPage, setDomain } = useComics()
  if (comics.length === 0) return null
  return (
    <View style={styles.container}>
      <SelectComics onClick={setDomain} />
      <ComicsList
        comics={comics}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </View>
  )
}
