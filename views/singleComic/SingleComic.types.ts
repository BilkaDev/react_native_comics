import { RouteProp } from '@react-navigation/native'

import { ComicsStackParams } from '../../App'
import { AppRoute } from '../../AppRoute'

export type SingleComicProps = {
  route: RouteProp<ComicsStackParams, AppRoute.singleComic>
}
