import { Image, Text } from 'react-native'
// @ts-ignore
import TestRenderer from 'react-test-renderer'

import { ComicsBasicType } from '../../../api/comics'
import { RenderComicsBasic } from '../../../components/Comics/renderComicsBasic/RenderComicsBasic'

let item: ComicsBasicType = {
  title: 'test',
  img: 'https://exmaple.com',
  id: '1',
  onClick: () => {}
}

describe('ComicsBasicType', () => {
  it('Render title', () => {
    const testRenderer = TestRenderer.create(<RenderComicsBasic item={item} />)
    const testInstance = testRenderer.root

    const element = testInstance.findByType(Text)
    const getSelectTitle = element['_fiber'].pendingProps.children

    expect(element).toBeDefined()
    expect(getSelectTitle).toBe('test')
  })

  it('Render image comics', () => {
    const testRenderer = TestRenderer.create(<RenderComicsBasic item={item} />)
    const testInstance = testRenderer.root

    const element = testInstance.findByType(Image)

    expect(element).toBeDefined()
  })
})
