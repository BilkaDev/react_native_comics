export type SingleComicType = {
  title: string
  day: string
  month: string
  year: string
  transcript: string
  img: string
  id: string
  alt: string
}

export type ComicsBasicType = {
  id: string
  title: string
  img: string
  onClick: () => void
}

export type ComicsXkcdType = {
  month: string
  num: number
  link: string
  year: string
  news: string
  safe_title: string
  transcript: string
  alt: string
  img: string
  title: string
  day: string
}
