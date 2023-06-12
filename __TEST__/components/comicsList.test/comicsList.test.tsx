// @ts-ignore
import TestRenderer from 'react-test-renderer'

import { ComicsBasicType } from '../../../api/comics'
import { ComicsList } from '../../../components/Comics/comicsList/ComicsList'
import { RenderComicsBasic } from '../../../components/Comics/renderComicsBasic/RenderComicsBasic'

const item: ComicsBasicType[] = [
  {
    title: 'test',
    img: 'https://exmaple.com',
    id: '1',
    onClick: () => {}
  },
  {
    title: 'test2',
    img: 'https://exmaple2.com',
    id: '2',
    onClick: () => {}
  }
]

describe('ComicsList', () => {
  it('render list comics', () => {
    const testRenderer = TestRenderer.create(
      <ComicsList comics={item} isFetchingNextPage={false} fetchNextPage={() => {}} />
    )
    const testInstance = testRenderer.root

    const element = testInstance.findAllByType(RenderComicsBasic)

    expect(element).toBeDefined()
  })
})
