import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


export default function One_a({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
          </View>
        </View>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text1}> 
        <TouchableOpacity >GROW</TouchableOpacity>
         <br>
          </br> 
          YOUR BUSINESS</Text>
        <Text style={styles.text2}>We will help you to grow your business using
          <br>
          </br> online server</Text>
      </View>
      <View style={styles.view3}>
        <View style={styles.view4}>
          <TouchableOpacity>
            <button style={styles.btn1}  onPress={() => navigation.navigate('FirstScreen')}>LOGIN</button>
          </TouchableOpacity>
          <TouchableOpacity>
            <button style={styles.btn2} onPress={() => navigation.navigate('FirstScreen')}>SIGN UP</button>
          </TouchableOpacity>
          {/* <button style={styles.btn1}>LOGIN</button> */}
          {/* <button style={styles.btn2}>SIGN UP</button> */}
        </View>
        <View style={styles.view3}>
          <Text style={styles.text3}>HOW WE WORK?</Text>
        </View>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#00CCF9',
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
  },
    outerCircle: {
    width: 140,
    height: 140,
    borderRadius: '50%',
    backgroundColor: 'black', // Để làm vòng tròn khuyết, đặt màu nền thành trong suốt
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 110, // Kích thước vòng tròn nhỏ
    height: 110,
    borderRadius: '50%', // Bán kính vòng tròn nhỏ
    backgroundColor: '#C9F4F6', // Màu sắc vòng tròn nhỏ
  },
  view1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  view3: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'space-around',
    justifyContent: 'space-around',
  },
  view4: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  text1: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 25,
    textAlign: 'center',
  },
  text2: {
    fontWeight: '700',
    fontFamily: 'Roboto',
    fontSize: 15,
    textAlign: 'center',
  }, 
  text3: {
    fontWeight: '700',
    fontFamily: 'Roboto',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 100
  }, 
  btn1:{
  backgroundColor: '#E3C000',
  width: 119,
  height: 48,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  fontSize: 20,
},
btn2:{
  backgroundColor: '#E3C000',
  width: 119,
  height: 48,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  fontSize: 20,
},
});
