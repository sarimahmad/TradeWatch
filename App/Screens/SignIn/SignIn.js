/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {BLACK, GREEN, GREY, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

export default class SignIn extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={styles.wrapperView}>
          <View style={{flex:1, width: SCREEN.width - 40, alignSelf:"center", alignItems:'center'}}>
            <Image
            style={{width: '100%',height: SCREEN.height / 2.5}}
            source={require('../../assets/dollar.png')}/>
            <View style={styles.itemView}>
            <Text>Hello</Text>
            <Text>hello</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    backgroundColor: WHITE.btntxtColor,
  },
  itemView:{
    width: SCREEN.width -40,
    height: 45,
    alignItems:"center",
    justifyContent:'space-between',
    paddingHorizontal: 15,
    backgroundColor:"#282461",
    flexDirection:'row',
    opacity: 0.1,
    marginBottom: 10,
    borderRadius: 10,
  }
    
});
