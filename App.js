import React from 'react';

import {View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import Graphs from './Screens/Graphs';
import LoginScreen from './Screens/LoginScreen';
import AllGraphs from './Screens/AllGraphs';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Graphs"
            component={Graphs}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="AllGraphs"
            component={AllGraphs}
            options={{headerShown: false}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
