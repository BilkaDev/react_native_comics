import { useNavigation } from '@react-navigation/native'
import { useMemo, useState } from 'react'
import { useInfiniteQuery } from 'react-query'

import { AppRoute } from '../../AppRoute'
import { DashboardScreenNavigationProp } from '../../views/dashboard/Dashboard.types'

import { fetchComicRequestXkcd } from './comics.request'
import { SingleComicType } from './comics.types'

type AvailableComicsDomain = string
export const useComics = () => {
  const [domain, setDomain] = useState<AvailableComicsDomain>('s')
  const navigation = useNavigation<DashboardScreenNavigationProp>()

  const { fetchComic, getNextPageParam } = useMemo(() => {
    switch (domain) {
      case 'xkcd.com':
        const getNextPageParam = (lastPage: SingleComicType) => {
          const maxPages = 1
          const nextPage = +lastPage.id - 1
          return nextPage < maxPages ? undefined : nextPage
        }
        return { fetchComic: fetchComicRequestXkcd, getNextPageParam }
        break
      case 'test.com':
        return { fetchComic: fetchComicRequestXkcd, getNextPageParam: () => undefined }

      case 'test4.com':
        return { fetchComic: fetchComicRequestXkcd, getNextPageParam: () => undefined }

      case 'test1.com':
        return { fetchComic: fetchComicRequestXkcd, getNextPageParam: () => undefined }

      case 'test2.com':
        return { fetchComic: fetchComicRequestXkcd, getNextPageParam: () => undefined }

      default:
        return { fetchComic: fetchComicRequestXkcd, getNextPageParam: () => undefined }
    }
  }, [domain])

  const { data, fetchNextPage, isSuccess, isFetchingNextPage } = useInfiniteQuery({
    queryKey: domain,
    queryFn: ({ pageParam }) => fetchComic(pageParam),
    getNextPageParam
  })

  const comics = useMemo(() => {
    if (!isSuccess) return []
    return data?.pages.flatMap((page) => ({
      id: page.id,
      title: page.title,
      img: page.img,
      onClick: () => navigation.navigate(AppRoute.singleComic, { comicId: page.id })
    }))
  }, [data?.pages, isSuccess, navigation])

  return { comics, isSuccess, fetchNextPage, isFetchingNextPage, domain, setDomain }
}
