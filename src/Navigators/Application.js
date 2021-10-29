import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FlexDirectionScreen from '@/Screens/FlexDirection/Containers/Index'

const Drawer = createDrawerNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="FlexDirectionScreen"
            component={FlexDirectionScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default ApplicationNavigator
