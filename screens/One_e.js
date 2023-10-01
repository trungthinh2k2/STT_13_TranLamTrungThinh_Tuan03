import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, button, Pressable, TextInput, Image } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
var radio_value = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
];
export default function One_e() {
  return (
    <View style={styles.wrap}>
      <View style={styles.container}>
        <Text style={styles.title}>REGISTER</Text>
        <View>
          <TextInput style={styles.input1} placeholder='Phone' />
          <TextInput style={styles.input2} placeholder='Name' />
          <TextInput style={styles.input3} placeholder='Email' />
          <View style={styles.password}>
            <TextInput style={styles.input4} placeholder='Password' />
            <Image style={styles.img} source={require('../assets/eye-1.png')} />
          </View>
          <TextInput style={styles.input5} placeholder='Birthday' />
          <View style={styles.radio}>
          <RadioForm
            radio_props={radio_value}
            initial={-1}
            onPress={(value) => { }}
            buttonColor={"black"}
            selectedButtonColor={"black"}
            formHorizontal={true}
          />
        </View>
        </View>
        <View style={styles.button}>
          <Pressable style={styles.button1}>
            <Text style={styles.buttonClick}>REGISTER</Text>
          </Pressable>
        </View>
        <Text style={styles.text}>When you agree to terms and conditions</Text>
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
  radio: {
    marginTop: 20,
    marginLeft: 17,
  },
  password: {
    flexDirection: 'row',
  },
  img: {
    width: "38px",
    height: "36px",
    marginTop: 30,
    backgroundColor: '#C4C4C4',
    height: 50,
    resizeMode: 'contain',
  },
  input3: {
    fontSize: 18,
    fontWeight: 400,
    backgroundColor: '#C4C4C4',
    width: 350,
    borderRadius: 1,
    padding: 10,
    marginTop: 30,
    height: 50,
  },
  input4: {
    fontSize: 18,
    fontWeight: 400,
    backgroundColor: '#C4C4C4',
    width: 315,
    borderRadius: 1,
    padding: 10,
    marginTop: 30,
    height: 50,
  },
  input1: {
    fontSize: 18,
    fontWeight: 400,
    backgroundColor: '#C4C4C4',
    width: 350,
    borderRadius: 1,
    padding: 10,
    marginTop: 30,
    height: 50,
  },
  input2: {
    fontSize: 18,
    fontWeight: 400,
    backgroundColor: '#C4C4C4',
    width: 350,
    borderRadius: 1,
    padding: 10,
    marginTop: 30,
    height: 50,
  },
  input5: {
    fontSize: 18,
    fontWeight: 400,
    backgroundColor: '#C4C4C4',
    width: 350,
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
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    width: 500,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '600',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
  },
  button1: {
    backgroundColor: '#E53935',
    marginTop: 20,
    borderRadius: 1,
    width: 350,
    fontWeight: 300,
  },
  buttonClick: {
    fontSize: 20,
    fontWeight: 700,
    color: '#ffffff',
    textAlign: 'center',
    padding: 10,
  },
});
