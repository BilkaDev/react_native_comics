import { Image, Text } from 'react-native'
// @ts-ignore
import TestRenderer from 'react-test-renderer'

import { SelectComics } from '../../../components/SelectComics/SelectComics'

describe('SelectComics', () => {
  it('render select comics text', () => {
    const testRenderer = TestRenderer.create(<SelectComics onClick={() => {}} />)
    const testInstance = testRenderer.root

    const element = testInstance.findByType(Text)
    const getSelectTitle = element['_fiber'].pendingProps.children

    expect(element).toBeDefined()
    expect(getSelectTitle).toBe('Select Comics')
  })

  it('render logo comics', () => {
    const testRenderer = TestRenderer.create(<SelectComics onClick={() => {}} />)
    const testInstance = testRenderer.root

    const element = testInstance.findAllByType(Image)

    expect(element).toBeDefined()
  })
})
