import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomFiller = () => {
  return (
    <View style={styles.backdrop}>
      <Text>BottomFiller</Text>
    </View>
  )
}

export default BottomFiller;

const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        backgroundColor: '#000000',
        width: '100%',
        height: '100%'

    }
})