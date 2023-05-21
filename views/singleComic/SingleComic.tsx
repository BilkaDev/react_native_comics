import { Image, Text, View } from 'react-native'

import { useSingleComic } from '../../api/comics/hooks'

import { styles } from './SingleComic.styles'
import { SingleComicProps } from './SingleComic.types'

export const SingleComic = ({ route }: SingleComicProps) => {
  const comicId = route.params.comicId
  const domain = route.params.domain
  const { comic, isSuccess } = useSingleComic({ domain, comicId })

  if (isSuccess) return null

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{comic?.title ?? 'No title'}</Text>
        <Text>
          Date: {comic?.day ?? '--'}/{comic?.month ?? '--'}/{comic?.year ?? '----'}
        </Text>
      </View>
      <Image
        resizeMode={'contain'}
        style={styles.image}
        source={{ uri: comic?.img }}
        alt={comic?.alt ?? 'comic image'}
      />
      {comic?.transcript && <Text style={styles.text}>Transcript: {comic.transcript}</Text>}
    </View>
  )
}
