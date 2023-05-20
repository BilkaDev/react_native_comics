export const getComicUrlXkcd = (id: string | undefined) =>
  `https://xkcd.com/${id ? id + '/' : ''}info.0.json`
