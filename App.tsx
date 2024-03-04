import { StyleSheet, Text, View , StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState } from 'react'

function App(): JSX.Element {
 const [bgColor, setBgColor] = useState("#ffffff");

 const generateColor = () => {
  const hexRange = "0123456789ABCDEF"
  let color = "#"

  for (let i = 0; i < 6; i++) {
    color += hexRange[Math.floor(Math.random()*16)]
  }
  setBgColor(color)
 }


  return (
    <>
    <StatusBar backgroundColor={bgColor} />
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.actionButton}>
          <Text style={styles.actionButtonText}> Press Me </Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 30,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    textTransform: 'uppercase',
  }
});

export default App;
