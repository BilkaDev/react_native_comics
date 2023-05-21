import { useMemo } from 'react'
import { InfiniteData, useQuery, useQueryClient } from 'react-query'

import { availableComics, AvailableComicsDomain } from '../avaibleComics'
import { fetchComicRequestXkcd } from '../comics.request'
import { SingleComicType } from '../comics.types'

type UseSingleComicType = {
  domain: AvailableComicsDomain
  comicId: string
}

export const useSingleComic = ({ domain, comicId }: UseSingleComicType) => {
  const { fetchComic } = useMemo(() => {
    switch (domain) {
      case availableComics.xkcd_com.domain: {
        return { fetchComic: fetchComicRequestXkcd }
      }
      case availableComics.example_com.domain: {
        return { fetchComic: fetchComicRequestXkcd }
      }

      case availableComics.example2_com.domain: {
        return { fetchComic: fetchComicRequestXkcd }
      }

      case availableComics.example3_com.domain: {
        return { fetchComic: fetchComicRequestXkcd }
      }

      case availableComics.example4_com.domain: {
        return { fetchComic: fetchComicRequestXkcd }
      }

      default: {
        return { fetchComic: fetchComicRequestXkcd }
      }
    }
  }, [domain])

  const queryClient = useQueryClient()
  const cacheData = queryClient.getQueryData<InfiniteData<SingleComicType>>('xkcd_com')
  const cacheComic = cacheData?.pages.find((comic) => comic.id === comicId) ?? undefined

  const { isSuccess, data: element } = useQuery({
    queryKey: [domain, 'comicsId'],
    enabled: !cacheComic,
    queryFn: async () => await fetchComic(comicId)
  })
  const comic = cacheComic ?? element

  return { comic, isSuccess: isSuccess || Boolean(cacheComic) }
}
