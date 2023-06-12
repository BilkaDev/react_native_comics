import { useState } from 'react'
import { Dimensions, Image } from 'react-native'

type UseImageSizeProps = {
  imageUrl: string
  maxHeightInDecimals: number
  widthInDecimals: number
}
export const useImageSize = ({ imageUrl, maxHeightInDecimals }: UseImageSizeProps) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const maxHeight = screenHeight * maxHeightInDecimals

  const calculatedSize = (imageWidth: number, imageHeight: number) => {
    const calculatedWidth = screenWidth * 0.9
    const percentageChange = (imageWidth - calculatedWidth) / imageWidth
    const newWidth = (1 - percentageChange) * imageWidth
    const newHeight = (1 - percentageChange) * imageHeight

    setSize(newWidth, newHeight)
  }
  const setSize = (newWidth: number, newHeight: number) => {
    setHeight(newHeight)
    setWidth(newWidth)
  }

  Image.getSize(imageUrl, calculatedSize)

  return { width, height, maxHeight }
}
