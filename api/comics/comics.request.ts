import axios from 'axios'

import { getComicUrlXkcd } from './comics.constants'
import { ComicsXkcdType, SingleComicType } from './comics.types'

const dataFilterToSingleComic = ({
  day,
  id,
  alt,
  img,
  month,
  title,
  transcript,
  year
}: SingleComicType): SingleComicType => ({
  day,
  id,
  img,
  month,
  title,
  transcript,
  year,
  alt
})

// for domain xkcd_com
export const fetchComicRequestXkcd = async (id: string | undefined): Promise<SingleComicType> => {
  const res = await axios.get<ComicsXkcdType>(getComicUrlXkcd(id))
  return dataFilterToSingleComic({
    id: res.data.num.toString(),
    img: res.data.img,
    day: res.data.day,
    month: res.data.month,
    year: res.data.year,
    alt: res.data.alt,
    transcript: res.data.transcript,
    title: res.data.title
  })
}
