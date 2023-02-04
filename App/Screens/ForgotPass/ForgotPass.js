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

export default class ForgotPass extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <View style={styles.UppertxtView}>
              <Text style={styles.VerificationTxt}>Forgot Your </Text>
              <Text style={styles.VerificationTxt}>Password?</Text>
              <Text
                style={[
                  styles.VerificationTxt,
                  {fontFamily: FONT.Poppins.regular, fontSize: 18},
                ]}>
                Enter your registered email below to receive password reset
                instruction
              </Text>
            </View>
            <Image
              style={styles.ForgotPassPic}
              source={require('../../assets/ForgotPass.png')}
            />
            <TextInput
              placeholder="youremail@email.com"
              style={styles.EmailInput}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EmailSent')}
              style={styles.SignInUp}>
              <Text style={styles.btntxt}>Send Reset Link</Text>
            </TouchableOpacity>
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
  ForgotPassPic: {
    width: SCREEN.width - 138,
    alignSelf: 'center',
    height: SCREEN.height / 2,
    resizeMode: 'contain',
    marginTop: 10,
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
    marginTop: 25,
  },
  btntxt: {
    fontFamily: FONT.Poppins.black,
    fontSize: 16,
    color: WHITE.btntxtColor,
  },
});
