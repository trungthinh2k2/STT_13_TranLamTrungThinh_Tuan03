import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-web';


export default function FirstScreen({}) {
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
        <button style={styles.btn1}>LOGIN</button>
        <button style={styles.btn2}>SIGN UP</button>
      </View>

    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#00CCF9',
    backgroundImage: 'linear-gradient(180deg, #00CCF9 0%, #00CCF9 100%)',

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
    backgroundColor: '#00CCF9', // Màu sắc vòng tròn nhỏ
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
