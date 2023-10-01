import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, button, Pressable, TextInput } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Two_a() {
  return (
    <View style={styles.wrap}>
      <LinearGradient
        colors={["#FBCB00", "#BF9A00"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.titleOn}>LOGIN</Text>
          </View>
          <View style={styles.user}>
            <Image style={styles.img2} source={require('../assets/avatar-user-1.png')} />
            <TextInput style={styles.input} placeholder='Name' />
          </View>
          <View style={styles.password}>
            <Image style={styles.img} source={require('../assets/lock.png')} />
            <TextInput style={styles.input1} placeholder='Password' />
            <Image style={styles.img1} source={require('../assets/eye-1.png')} />
          </View>
          <View style={styles.button}>
            <Pressable style={styles.button1}>
              <Text style={styles.buttonClick}>LOGIN</Text>
            </Pressable>
          </View>
          <Text style={styles.click}>CREATE ACCOUNT</Text>
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
  click: {
    fontSize: 20,
    fontWeight: 700,
    width: 300,
    textAlign: 'center',
    marginTop: 50,
  },
  password: {
    flexDirection: 'row',
  },
  user: {
    flexDirection: 'row',
  },
  input: {
    fontSize: 18,
    fontWeight: 400,
    backgroundColor: '#DDBD3B',
    width: 320,
    borderRadius: 1,
    padding: 10,
    marginTop: 30,
    height: 50
  },
  input1: {
    fontSize: 18,
    fontWeight: 400,
    backgroundColor: '#DDBD3B',
    width: 280,
    borderRadius: 1,
    padding: 10,
    marginTop: 30,
    height: 50,
  },
  img: {
    width: "38px",
    height: "36px",
    marginTop: 30,
    backgroundColor: '#DDBD3B',
    height: 50,
    resizeMode: 'contain',
    alignItems: 'flex-start',
  },
  img1: {
    width: "38px",
    height: "36px",
    marginTop: 30,
    backgroundColor: '#DDBD3B',
    height: 50,
    resizeMode: 'contain',
  },
  img2: {
    width: "38px",
    height: "36px",
    marginTop: 30,
    backgroundColor: '#DDBD3B',
    height: 50,
    resizeMode: 'contain',
    alignItems: 'flex-start',
  },
  linearGradient: {
    height: "100%",
  },
  wrap: {
    flex: 1
  },
  title: {
    marginRight: 250
  },
  titleOn: {
    fontSize: 30,
    fontWeight: 700,
    color: '#000000',
    alignItems: 'flex-start',
    marginTop: -80,
  },
  titleUp: {
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    width: 300,
    textAlign: 'center',
    marginTop: 40,
    fontWeight: '600',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
  },
  button1: {
    backgroundColor: '#060000',
    marginTop: 80,
    borderRadius: 1,
    width: 350,
    fontWeight: '300',
  },
  buttonClick: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontWeight: '700',
  },
});
