import { availableComics, AvailableComicsDomain } from '../../api/comics'

type SelectComicsItemsType = {
  domain: AvailableComicsDomain
  image: string
}

export const selectComicsItems: SelectComicsItemsType[] = [
  {
    domain: availableComics.xkcd_com.domain,
    image: availableComics.xkcd_com.logo
  },
  {
    domain: availableComics.example_com.domain,
    image: availableComics.example_com.logo
  },
  {
    domain: availableComics.example2_com.domain,
    image: availableComics.example2_com.logo
  },
  {
    domain: availableComics.example3_com.domain,
    image: availableComics.example3_com.logo
  },
  {
    domain: availableComics.example4_com.domain,
    image: availableComics.example4_com.logo
  }
]
