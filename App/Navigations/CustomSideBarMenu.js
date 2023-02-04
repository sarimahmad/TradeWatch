/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {DrawerItemList} from '@react-navigation/drawer';
import {FONT, isIphoneXorAbove} from '../helper/Constant';
import {ORANGE, WHITE} from '../helper/Color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions} from '@react-navigation/native';
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/user';

const CustomSidebarMenu = props => {
  const [userObject, setUserObject] = useState('');
  useEffect(() => {
    async function fetchData() {
      if (userObject === '') {
        const userDetail = await AsyncStorage.getItem('USERDETAIL');
        setUserObject(JSON.parse(userDetail));
        console.log(userObject);
      }
    }
    fetchData();
  });

  const LogOut = () => {
    AsyncStorage.clear();
    props.navigation.dispatch(StackActions.popToTop());
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 150,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: ORANGE.DrawerUpperColor,
          borderTopEndRadius: isIphoneXorAbove ? 80 : 50,
        }}>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View
            style={{
              height: 64,
              width: 64,
              borderRadius: 12,
              backgroundColor: 'red',
            }}>
            <Image
              style={{height: 64, width: 64, borderRadius: 12}}
              source={{
                uri:
                  userObject &&
                  userObject.user &&
                  `https://ebilty.com/public/${userObject.user.profile_image}`,
              }}
            />
          </View>
          <View style={{marginLeft: 8}}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: FONT.OpenSans.semiBold,
                color: WHITE.btntxtColor,
                marginBottom: 3,
              }}>
              {userObject && userObject.user && userObject.user.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: FONT.OpenSans.regular,
                color: WHITE.btntxtColor,
              }}>
              {userObject && userObject.role === 1
                ? 'Customer'
                : userObject.role === 2
                ? 'Individual Driver'
                : userObject.role === 0
                ? 'Company Driver'
                : 'Company'}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: ORANGE.DrawerDownColor,
          flex: 1,
          borderBottomEndRadius: 50,
        }}>
        <DrawerItemList {...props} />
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => LogOut()}>
          <Text style={{color: 'white', marginLeft: 50}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function mapStateToProps(state, props) {
  return {
    userDetail: state.user.userDetail,
    userToken: state.user.userToken,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    callApi: (user, access_token) =>
      dispatch(userActions.setUser({user, access_token})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomSidebarMenu);
