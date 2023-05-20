import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { AppProviders } from './appProviders/AppProviders'

const Stack = createNativeStackNavigator()

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Open App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default function App() {
  return (
    <AppProviders>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={HomeScreen} options={{ title: 'Comics' }} />
      </Stack.Navigator>
    </AppProviders>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
