import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

import { AppProviders } from './appProviders/AppProviders'
import { SingleComic } from './components/Comic/SingleComic'
import { Dashboard } from './views/dashboard/Dashboard'

import { AppRoute } from './AppRoute'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <AppProviders>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name={AppRoute.dashboard}
          component={Dashboard}
          options={{ title: 'Comics' }}
        />
        <Stack.Screen
          name={AppRoute.SingleComic}
          component={SingleComic}
          options={{ title: 'Single comic' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </AppProviders>
  )
}
