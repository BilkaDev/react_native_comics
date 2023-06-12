import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { ComicsStackParams } from '../../App'
import { AppRoute } from '../../AppRoute'

export type DashboardScreenNavigationProp = NativeStackNavigationProp<
  ComicsStackParams,
  AppRoute.dashboard
>
