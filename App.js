import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SeasonScreen from './screens/SeasonScreen';
import ConstellationDetailScreen from './screens/ConstellationDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a237e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'きせつの星ざ' }}
        />
        <Stack.Screen 
          name="Season" 
          component={SeasonScreen}
          options={({ route }) => ({ title: route.params.season })}
        />
        <Stack.Screen 
          name="ConstellationDetail" 
          component={ConstellationDetailScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
