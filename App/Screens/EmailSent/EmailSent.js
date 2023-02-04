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

export default class EmailSent extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <View style={styles.UppertxtView}>
              <Text style={styles.VerificationTxt}>Email has </Text>
              <Text style={styles.VerificationTxt}>been sent!</Text>
              <Text
                style={[
                  styles.VerificationTxt,
                  {fontFamily: FONT.Poppins.regular, fontSize: 18},
                ]}>
                Please check your inbox and click in the received link to reset
                a password
              </Text>
            </View>
            <Image
              style={styles.EmailSent}
              source={require('../../assets/EmailSent.png')}
            />

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignIn')}
              style={styles.SignInUp}>
              <Text style={styles.btntxt}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.ResendTxt}>
              Didn’t receive code?
              <TouchableOpacity>
                <Text
                  style={[
                    styles.ResendTxt,
                    {fontFamily: FONT.Poppins.semiBold, color: GREEN.semiLight},
                  ]}>
                  {' '}
                  Request
                </Text>
              </TouchableOpacity>
            </Text>
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
  mainView: {
    width: SCREEN.width - 48,
    alignSelf: 'center',
  },
  UppertxtView: {
    marginTop: 30,
  },
  VerificationTxt: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 28,
    color: BLACK.dark,
  },
  EmailSent: {
    width: SCREEN.width - 95,
    alignSelf: 'center',
    height: SCREEN.height / 2.6,
    resizeMode: 'contain',
    marginTop: SCREEN.height * 0.09,

  },
  EmailInput: {
    borderWidth: 1,
    width: '100%',
    borderColor: GREY.semilight,
    borderRadius: 20,
    paddingLeft: 22,
    height: 56,
  },
  SignInUp: {
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GREEN.regular,
    borderRadius: 20,
    marginTop:20
  },
  btntxt: {
    fontFamily: FONT.Poppins.black,
    fontSize: 16,
    color: WHITE.btntxtColor,
  },
  ResendTxt: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 18,
    color: GREY.semilight,
    textAlign: 'center',
    marginTop:20

  },
});
