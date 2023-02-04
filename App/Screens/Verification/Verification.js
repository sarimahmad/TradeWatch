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

export default class Verification extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <View style={styles.UppertxtView}>
              <Text style={styles.VerificationTxt}>Verification</Text>
              <Text style={styles.VerificationTxt}>Code</Text>
              <Text
                style={[
                  styles.VerificationTxt,
                  {fontFamily: FONT.Poppins.regular, fontSize: 18},
                ]}>
                Please enter verificationTxt code sent to your mobile
              </Text>
            </View>
            <Text style={[styles.CodeOnMob]}>
              Code is sent to +91 1234 5678
            </Text>
            <Image
              style={styles.VerificationImage}
              source={require('../../assets/Verification.png')}
            />

            <View style={styles.InputCodeView}>
              <TextInput keyboardType="number-pad" style={styles.codeInput} />
              <TextInput keyboardType="number-pad" style={styles.codeInput} />
              <TextInput keyboardType="number-pad" style={styles.codeInput} />
              <TextInput keyboardType="number-pad" style={styles.codeInput} />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
              style={styles.SignInUp}>
              <Text style={styles.btntxt}>Verify and Create Account</Text>
            </TouchableOpacity>

            <Text style={styles.Codetxt}>
              Didn’t receive code?
              <TouchableOpacity>
                <Text
                  style={[
                    styles.Codetxt,
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
  VerificationTxt: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 28,
    color: BLACK.dark,
  },
  UppertxtView: {
    marginTop: 30,
  },
  CodeOnMob: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 18,
    color: GREY.semilight,
    marginTop: 25,
  },
  VerificationImage: {
    width: SCREEN.width - 104,
    height: SCREEN.height / 3,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  InputCodeView: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  codeInput: {
    borderWidth: 1.5,
    height: 65,
    width: 65,
    borderColor: GREY.semilight,
    borderRadius: 20,
    fontSize: 28,
    paddingLeft: 20,
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
  Codetxt: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 18,
    color: GREY.semilight,
    textAlign: 'center',
    marginTop: 25,
  },
});
