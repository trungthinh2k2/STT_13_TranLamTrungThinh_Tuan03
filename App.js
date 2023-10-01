import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, FirstScreen, One_a, One_b, One_c, One_d, One_e, Two_a} from "./screens";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="One_a" component={One_a} />
        <Stack.Screen name="One_b" component={One_b} />
        <Stack.Screen name="One_c" component={One_c} />
        <Stack.Screen name="One_d" component={One_d} />
        <Stack.Screen name="One_e" component={One_e} />
        <Stack.Screen name="Two_a" component={Two_a} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;