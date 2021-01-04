import React from 'react';
import {Image} from 'react-native'
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import SearchScreen from './screens/SearchScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import firebase from '../config'
export default class App extends React.Component{
  render(){
    return (
      <AppContainer />
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  WriteStoryScreen:{screen:WriteStoryScreen,
  navigationOptions : {
    tabBarIcon:<Image source={require('./assets/write.png')} style={{width:40,height:40}} />,
    tabBarLabel:'Write Story'
  }},
  ReadStoryScreen:{screen:ReadStoryScreen ,
    navigationOptions : {
      tabBarIcon:<Image source={require('./assets/read.png')} style={{width:40,height:40}} />,
      tabBarLabel:'Read Story'}
    },
    SearchScreen:{screen:SearchScreen ,
      navigationOptions : {
        tabBarIcon:<Image source={require('./assets/searchingbook.png')} style={{width:40,height:40}} />,
        tabBarLabel:'Search'}
      }
  })
  const SwitchNavigator = createSwitchNavigator({
    loginScreen:{screen:loginScreen},
    TabNavigator:{screen:TabNavigator}
  })
  const AppContainer = createAppContainer(SwitchNavigator)
