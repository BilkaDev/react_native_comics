import axios from 'axios'

import { getComicUrlXkcd } from './comics.constants'
import { ComicsXkcdType } from './comics.types'

export const fetchComicRequestXkcd = async (id: string | undefined) => {
  const res = await axios.get<ComicsXkcdType>(getComicUrlXkcd(id))
  return res.data
}
