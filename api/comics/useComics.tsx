import { useNavigation } from '@react-navigation/native'
import { useMemo, useState } from 'react'
import { useInfiniteQuery } from 'react-query'

import { AppRoute } from '../../AppRoute'
import { DashboardScreenNavigationProp } from '../../views/dashboard/Dashboard.types'

import { availableComics, AvailableComicsDomain, DEFAULT_COMICS_DOMAIN } from './avaibleComics'
import { fetchComicRequestXkcd } from './comics.request'
import { SingleComicType } from './comics.types'

export const useComics = () => {
  const [domain, setDomain] = useState<AvailableComicsDomain>(DEFAULT_COMICS_DOMAIN)
  const navigation = useNavigation<DashboardScreenNavigationProp>()

  const { fetchComic, getNextPageParam } = useMemo(() => {
    switch (domain) {
      case availableComics.xkcd_com.domain: {
        const getNextPageParam = (lastPage: SingleComicType) => {
          const maxPages = 1
          const nextPage = +lastPage.id - 1
          return nextPage < maxPages ? undefined : nextPage
        }
        return { fetchComic: fetchComicRequestXkcd, getNextPageParam }
      }
      case availableComics.example_com.domain: {
        return { fetchComic: fetchComicRequestXkcd, getNextPageParam: () => undefined }
      }

      case availableComics.example2_com.domain: {
        return { fetchComic: fetchComicRequestXkcd, getNextPageParam: () => undefined }
      }

      case availableComics.example3_com.domain: {
        return { fetchComic: fetchComicRequestXkcd, getNextPageParam: () => undefined }
      }

      case availableComics.example4_com.domain: {
        return { fetchComic: fetchComicRequestXkcd, getNextPageParam: () => undefined }
      }

      default: {
        return { fetchComic: fetchComicRequestXkcd, getNextPageParam: () => undefined }
      }
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
