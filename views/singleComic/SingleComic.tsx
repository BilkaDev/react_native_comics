import { Image, ScrollView, Text, View } from 'react-native'

import { useSingleComic } from '../../api/comics/hooks'
import { useImageSize } from '../../hooks/useImageSize'

import { styles } from './SingleComic.styles'
import { SingleComicProps } from './SingleComic.types'

export const SingleComic = ({ route }: SingleComicProps) => {
  const comicId = route.params.comicId
  const domain = route.params.domain
  const { comic, isSuccess } = useSingleComic({ domain, comicId })
  const { width, height, maxHeight } = useImageSize({
    imageUrl: comic?.img ?? '',
    maxHeightInDecimals: 0.45,
    widthInDecimals: 0.9
  })

  if (!isSuccess) return null

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
        style={{ width, height, maxHeight }}
        source={{ uri: comic?.img }}
        alt={comic?.alt ?? 'comic image'}
      />
      {comic?.transcript && (
        <ScrollView style={styles.textContent}>
          <Text style={styles.transcript}>Transcript:</Text>
          <Text style={styles.text}>
            {comic.transcript}
            {comic.transcript}
          </Text>
        </ScrollView>
      )}
    </View>
  )
}
