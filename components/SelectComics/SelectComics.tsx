import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { AvailableComicsDomain } from '../../api/comics'

import { styles } from './SelectComics.styles'
import { SelectComicsProps } from './SelectComics.types'
import { selectComicsItems } from './selectComicsItems'

export const SelectComics = ({ onClick }: SelectComicsProps) => {
  const handleImagePress = (domain: AvailableComicsDomain) => {
    onClick(domain)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Comics</Text>
      <ScrollView style={styles.images} horizontal>
        {selectComicsItems.map((item) => (
          <TouchableOpacity key={item.domain} onPress={() => handleImagePress(item.domain)}>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
