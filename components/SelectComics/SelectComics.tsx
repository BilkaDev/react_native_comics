import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { styles } from './SelectComics.styles'

export const SelectComics = () => {
  const images = [
    'https://cdn.pixabay.com/photo/2020/08/18/23/19/spheres-5499579_960_720.png',
    'https://cdn.pixabay.com/photo/2016/04/01/09/41/comics-1299500_640.png',
    'https://cdn.pixabay.com/photo/2019/08/01/21/40/spiderman-4378357_640.png',
    'https://cdn.pixabay.com/photo/2020/12/09/16/08/joker-5817831_960_720.png',
    'https://cdn.pixabay.com/photo/2016/06/09/17/45/hacker-1446193_640.jpg'
  ]

  const handleImagePress = () => {
    console.log('click')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Comics</Text>
      <ScrollView style={styles.images} horizontal>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImagePress()}>
            <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
