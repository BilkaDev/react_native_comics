import axios from 'axios'

import { getComicUrlXkcd } from './comics.constants'
import { ComicsXkcdType, SingleComicType } from './comics.types'

export const fetchComicRequestXkcd = async (id: string | undefined): Promise<SingleComicType> => {
  const res = await axios.get<ComicsXkcdType>(getComicUrlXkcd(id))
  return {
    day: res.data.day,
    id: res.data.num.toString(),
    img: res.data.img,
    month: res.data.month,
    title: res.data.title,
    transcript: res.data.transcript,
    year: res.data.year,
    alt: res.data.alt
  }
}
