import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { useMemo } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useInfiniteQuery } from 'react-query'

import { AppRoute } from '../../AppRoute'
import { RenderComicsBasic } from '../../components/Comics/RenderComicsBasic/RenderComicsBasic'

import { styles } from './Dashboard.styles'
import { DashboardScreenNavigationProp } from './Dashboard.types'

export const Dashboard = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>()
  const { data, fetchNextPage, isSuccess, isFetchingNextPage } = useInfiniteQuery({
    queryKey: 'comics',
    queryFn: async ({ pageParam }) => {
      const res = await axios.get(`https://xkcd.com/${pageParam ? pageParam + '/' : ''}info.0.json`)
      return res.data
    },
    getNextPageParam: (lastPage) => {
      const maxPages = 1
      const nextPage = lastPage.num - 1
      return nextPage < maxPages ? undefined : nextPage
    }
  })

  const comics = useMemo(() => {
    if (!isSuccess) return []
    return data?.pages.flatMap((page: any) => ({
      id: page.num.toString(),
      title: page.title,
      img: page.img,
      onClick: () => navigation.navigate(AppRoute.singleComic, page.num.toString())
    }))
  }, [data?.pages, isSuccess, navigation])
  if (!isSuccess) return null

  return (
    <View style={styles.container}>
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
