import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

import { AvailableComicsDomain } from './api/comics'
import { AppProviders } from './appProviders/AppProviders'
import { Dashboard } from './views/dashboard/Dashboard'
import { SingleComic } from './views/singleComic/SingleComic'

import { AppRoute } from './AppRoute'

export type ComicsStackParams = {
  [AppRoute.dashboard]: undefined
  [AppRoute.singleComic]: {
    comicId: string
    domain: AvailableComicsDomain
  }
}

const ComicsStack = createNativeStackNavigator<ComicsStackParams>()

export default function App() {
  return (
    <AppProviders>
      <ComicsStack.Navigator initialRouteName={AppRoute.dashboard}>
        <ComicsStack.Screen
          name={AppRoute.dashboard}
          component={Dashboard}
          options={{ title: 'Comics' }}
        />
        <ComicsStack.Screen
          name={AppRoute.singleComic}
          component={SingleComic}
          options={{ title: 'Single Comic' }}
        />
      </ComicsStack.Navigator>
      <StatusBar style="auto" />
    </AppProviders>
  )
}
