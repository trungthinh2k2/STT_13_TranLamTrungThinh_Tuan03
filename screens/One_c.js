import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, button, Pressable, TextInput} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function One_c() {
  return (
    <View style={styles.wrap}>
      <LinearGradient
      colors ={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style ={styles.linearGradient}
      >
      <View style={styles.container}>
        <Text style={[styles.title]}>CODE</Text>
        <Text style={styles.text}>VERIFICATION</Text>
        <Text style={styles.text1}>Enter ontime password sent on ++849092605798</Text>
        <View style={styles.rowText}>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        </View>
        <View style={styles.button}>
          <Pressable style={styles.button1}>
            <Text style={styles.buttonClick}>VERIFY CODE</Text>
          </Pressable>
        </View>
      </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial',
  },
  rowText: {
    flexDirection: 'row',
  },
  input: {
    width: '50px',
    height: '50px',
    border: '1px solid black',
    marginTop: 40,
  },
  linearGradient: {
    height: "100%",
  },
  wrap: {
    flex: 1
  },
  title: {
    fontSize: 60,
    fontFamily: 'Roboto',
    fontWeight: 700,
    color: '#000000',
    lineHeight: 70,
  },
  text: {
    fontSize: 20,
    fontWeight: 700,
    width: 300,
    textAlign: 'center',
    marginTop: 50,
  },
  text1: {
    fontSize: 15,
    width: 300,
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 60,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
  },
  button1: {
    backgroundColor: '#E3C000',
    fontWeight: 300,
    borderRadius: 1,
    width: 350,
    marginTop: 50,
  },
  buttonClick:{
    fontSize: 18,
    color: '#000000',
    fontWeight: 700,
    textAlign: 'center',
    padding: 10,
  },
});
