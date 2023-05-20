import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStackParamList } from '../../App'
import { AppRoute } from '../../AppRoute'

export type DashboardScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  AppRoute.dashboard
>
