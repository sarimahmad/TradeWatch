/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomSidebarMenu from './CustomSideBarMenu';
import {isIphoneXorAbove} from '../helper/Constant';
import {BLACK, GREEN, ORANGE} from '../helper/Color';
import SignIn from '../Screens/SignIn/SignIn';
import SignUp from '../Screens/SignUp/SignUp';
import Verification from '../Screens/Verification/Verification';
import ForgotPass from '../Screens/ForgotPass/ForgotPass';
import Home from '../Screens/Home/Home';
import EmailSent from '../Screens/EmailSent/EmailSent';
import Locker from '../Screens/Locker/Locker';
import News from '../Screens/News/News';
import Watchlist from '../Screens/Watchlist/Watchlist';
import Settings from '../Screens/Settings/Settings';
import Compare from '../Screens/Compare/Compare';
import Videos from '../Screens/Videos/Videos';
import ForumSurvey from '../Screens/Forum&Survey/ForumSurvey';
import ForumPage from '../Screens/ForumPage/ForumPage';
import AddPost from '../Screens/AddPost.js/AddPost';
import AddSurvey from '../Screens/AddSurvey/AddSurvey';
import Questionare from '../Screens/Questionare/Questionare';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

// function DrawerContent(props) {
//   return (
//     <Drawer.Navigator
//       drawerStyle={{
//         borderTopEndRadius: isIphoneXorAbove ? 80 : 50,
//         borderBottomEndRadius: 50,
//         width: 260,
//       }}
//       drawerPosition="left"
//       drawerContentOptions={{
//         activeBackgroundColor: ORANGE.DrawerDownColor,
//         itemStyle: {marginVertical: 5},
//         labelStyle: {
//           color: 'white',
//         },
//       }}
//       drawerContent={props => <CustomSidebarMenu {...props} />}>
//       <Drawer.Screen
//         name="Location"
//         options={{
//           drawerIcon: ({focused, size}) =>
//             focused ? (
//               <View
//                 style={{
//                   height: 41,
//                   width: 41,
//                   borderRadius: 10,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   backgroundColor: '#FCC60F',
//                 }}>
//                 <Image source={require('../assets/Home.png')} />
//               </View>
//             ) : (
//               <Image source={require('../assets/Home.png')} />
//             ),
//           title: 'Home',
//         }}
//         component={Location}
//       />
//       <Drawer.Screen
//         name="Payment"
//         options={{
//           drawerIcon: ({focused, size}) =>
//             focused ? (
//               <View
//                 style={{
//                   height: 41,
//                   width: 41,
//                   borderRadius: 10,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   backgroundColor: '#FCC60F',
//                 }}>
//                 <Image source={require('../assets/YourEbilities.png')} />
//               </View>
//             ) : (
//               <Image source={require('../assets/YourEbilities.png')} />
//             ),
//           title: 'Payment',
//         }}
//         component={Payment}
//       />
//       <Drawer.Screen
//         name="Allshipments"
//         options={{
//           drawerIcon: ({focused, size}) =>
//             focused ? (
//               <View
//                 style={{
//                   height: 41,
//                   width: 41,
//                   borderRadius: 10,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   backgroundColor: '#FCC60F',
//                 }}>
//                 <Image source={require('../assets/Shipments.png')} />
//               </View>
//             ) : (
//               <Image source={require('../assets/Shipments.png')} />
//             ),
//           title: 'Allshipments',
//         }}
//         component={Allshipments}
//       />
//       <Drawer.Screen
//         name="EditProfile"
//         options={{
//           drawerIcon: ({focused, size}) => (
//             <Image source={require('../assets/Profile.png')} />
//           ),
//           title: 'Edit Profile',
//         }}
//         component={profile}
//       />
//       <Drawer.Screen
//         name="HelpandSupport"
//         options={{
//           drawerIcon: ({focused, size}) => (
//             <Image source={require('../assets/Help.png')} />
//           ),
//           title: 'Help and Support',
//         }}
//         component={Allshipments}
//       />
//     </Drawer.Navigator>
//   );
// }
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: GREEN.regular,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 24, height: 24}}
                source={
                  focused
                    ? require('../assets/Home.png')
                    : require('../assets/SimpleHome.png')
                }
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Locker"
        component={Locker}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 20, height: 20}}
                source={
                  focused
                    ? require('../assets/activeVector.png')
                    : require('../assets/Vector.png')
                }
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{width: 24, height: 24}}
                source={
                  focused
                    ? require('../assets/activeSetting.png')
                    : require('../assets/Setting.png')
                }
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="EmailSent" component={EmailSent} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Watchlist" component={Watchlist} />
        <Stack.Screen name="Compare" component={Compare} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="ForumSurvey" component={ForumSurvey} />
        <Stack.Screen name="ForumPage" component={ForumPage} />
        <Stack.Screen name="AddPost" component={AddPost} />
        <Stack.Screen name="AddSurvey" component={AddSurvey} />
        <Stack.Screen name="Questionare" component={Questionare} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
