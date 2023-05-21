import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  top: {
    marginBottom: 10,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  textContent: {
    marginBottom: 50
  },

  transcript: {
    fontWeight: 'bold',
    fontSize: 18
  },
  text: {
    marginTop: 5,
    fontSize: 18
  }
})
