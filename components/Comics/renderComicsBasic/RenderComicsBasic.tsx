import { Image, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './RenderComicsBasic.styles'
import { RenderComicsBasicProps } from './RenderComicsBasic.types'

export const RenderComicsBasic = ({ item }: RenderComicsBasicProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={item.onClick}>
        <Text style={styles.title}>{item.title}</Text>
        <Image resizeMode="contain" style={styles.image} source={{ uri: item.img }} />
      </TouchableOpacity>
    </View>
  )
}
