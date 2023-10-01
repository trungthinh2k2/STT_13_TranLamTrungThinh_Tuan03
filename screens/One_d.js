import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, button, Pressable, TextInput, Image} from 'react-native';

export default function One_d() {
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput textContentType='emailAddress' style={styles.input} placeholder='Email' />
        <View style={styles.password}>
          <TextInput textContentType='password' style={styles.input1} placeholder='Password'/>
          <Image style={styles.img} source={require('../assets/eye-1.png')}/>
        </View>
        <View style={styles.button}>
          <Pressable style={styles.button1}>
            <Text style={styles.buttonClick}>LOGIN</Text>
          </Pressable>
        </View>
        <Text style={styles.text}>When you agree to terms and conditions</Text>
        <Pressable>
          <Text style={styles.text1}>For got your password?</Text>
        </Pressable>
        <Text style={styles.text2}>Or login with</Text>
        <View style={styles.icon}>
          <View style={[styles.background, styles.face]}>
          <Image style={styles.img1} source={require('../assets/icofacebook1924510-1.png')}/>
          </View>
          <View style={[styles.background, styles.zalo]}>
          <Image style={styles.img2} source={require('../assets/zalo.png')}/>
          </View>
          <View style={[styles.background, styles.gg]}>
          <Image style={styles.img3} source={require('../assets/icogoogle-1.png')}/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31AA5230',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial',
  },
  background:{
    width: '110px',
    height: '45px',
    justifyContent:'center',
  },
  icon:{
    flexDirection: 'row',
    marginTop: 50,
  },
  gg: {
    flexDirection: 'row',
    alignItems: 'center',
    border: '1px solid blue',
  },
  zalo: {
    fontSize:40,
    flexDirection: 'row',
    backgroundColor: '#1894c4',
    alignItems: 'center',
  },
  face: {
    flexDirection: 'row',
    backgroundColor:'#285c8c',
    alignItems: 'center',
  },
  img: {
    width: "38px",
    height: "36px",
    marginTop: 30,
    backgroundColor:'#C4C4C4',
    height: 50,
    resizeMode: 'contain',
  },
  img1:{
    width: '30px',
    height: '30px',
  },
  img2:{
    width: '20px',
    height: '20px',
  },
  img3:{
    width: '20px',
    height: '20px',
  },
  password: {
    flexDirection: 'row',
  },
  input: {
    fontSize: 18,
    fontWeight : 400,
    backgroundColor: '#C4C4C4',
    width: 350,
    borderRadius: 1,
    padding: 10,
    marginTop: 50,
    height: 50,
  },
  input1: {
    fontSize: 18,
    fontWeight : 400,
    backgroundColor: '#C4C4C4',
    width: 315,
    borderRadius: 1,
    padding: 10,
    marginTop: 30,
    height: 50,
  },
  wrap: {
    flex: 1
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    color: '#000000',
    marginTop: 0,
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    width: 500,
    textAlign: 'center',
    marginTop: 20,
  },
  text1: {
    fontSize: 14,
    fontWeight: 400,
    width: 500,
    textAlign: 'center',
    marginTop: 20,
    color:'#5D25FA',
  },
  text2: {
    fontSize: 14,
    fontWeight: 400,
    width: 500,
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
  },
  button1: {
    backgroundColor: '#E53935',
    marginTop: 80,
    borderRadius: 1,
    width: 350,
    fontWeight: 300,
  },
  buttonClick:{
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    padding: 10,
  },
});
