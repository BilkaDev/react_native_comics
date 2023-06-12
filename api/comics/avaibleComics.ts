export const xkcd_com = {
  domain: 'xkcd_com',
  logo: 'https://cdn.pixabay.com/photo/2020/08/18/23/19/spheres-5499579_960_720.png'
} as const

export const example_com = {
  domain: 'example_com',
  logo: 'https://cdn.pixabay.com/photo/2016/04/01/09/41/comics-1299500_640.png'
} as const

export const example2_com = {
  domain: 'example2_com',
  logo: 'https://cdn.pixabay.com/photo/2019/08/01/21/40/spiderman-4378357_640.png'
} as const

export const example3_com = {
  domain: 'example3_com',
  logo: 'https://cdn.pixabay.com/photo/2020/12/09/16/08/joker-5817831_960_720.png'
} as const

export const example4_com = {
  domain: 'example4_com',
  logo: 'https://cdn.pixabay.com/photo/2016/06/09/17/45/hacker-1446193_640.jpg'
} as const

export const availableComics = {
  xkcd_com,
  example_com,
  example2_com,
  example3_com,
  example4_com
}

export const DEFAULT_COMICS_DOMAIN = xkcd_com.domain
export type AvailableComicsDomain = keyof typeof availableComics
