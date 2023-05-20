import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

import { AppProviders } from './appProviders/AppProviders'
import { Dashboard } from './views/dashboard/Dashboard'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <AppProviders>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Comics' }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </AppProviders>
  )
}
