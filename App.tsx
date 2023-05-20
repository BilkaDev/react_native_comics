import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

import { AppProviders } from './appProviders/AppProviders'
import { SingleComic } from './components/Comic/SingleComic'
import { Dashboard } from './views/dashboard/Dashboard'

import { AppRoute } from './AppRoute'

export type RootStackParamList = {
  [AppRoute.dashboard]: undefined
  [AppRoute.singleComic]: { comicId: string }
}

export const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <AppProviders>
      <Stack.Navigator initialRouteName={AppRoute.dashboard}>
        <Stack.Screen
          name={AppRoute.dashboard}
          component={Dashboard}
          options={{ title: 'Comics' }}
        />
        <Stack.Screen
          name={AppRoute.singleComic}
          component={SingleComic}
          options={{ title: 'Single comic' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </AppProviders>
  )
}
