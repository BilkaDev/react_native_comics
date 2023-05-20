import { Image, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './RenderComicsBasic.styles'
import { RenderComicsBasicProps } from './RenderComicsBasic.types'

export const RenderComicsBasic = ({ item }: RenderComicsBasicProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={item.onClick}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{ uri: item.img }} style={{ width: '70%', aspectRatio: 1 }} />
      </TouchableOpacity>
    </View>
  )
}
