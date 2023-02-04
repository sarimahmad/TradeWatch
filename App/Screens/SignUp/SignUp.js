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
import Fontisto from 'react-native-vector-icons/Fontisto';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBox: false,
    };
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <Text style={styles.HeaderTxt}>Sign Up</Text>
            <Text style={[styles.HeaderTxt2]}>
              Let's join millions of traders in the world.
            </Text>
            <Text style={styles.SignWith}>Sign Up With</Text>
            <View style={styles.SocialIconView}>
              <Image
                style={styles.SocialIcon}
                source={require('../../assets/Google.png')}
              />
              <Image
                style={styles.SocialIcon}
                source={require('../../assets/Facebook.png')}
              />
              <Image
                style={styles.SocialIcon}
                source={require('../../assets/Instagram.png')}
              />
              <Image
                style={styles.SocialIcon}
                source={require('../../assets/Twitter.png')}
              />
            </View>
            <Image
              style={styles.orImage}
              source={require('../../assets/or.png')}
            />
            <View style={styles.textInputView}>
              <TextInput
                placeholder={'youremail@email.com'}
                style={styles.txtInput}
              />
              <TextInput
                placeholder={'Password'}
                style={[styles.txtInput, {marginTop: 10}]}
              />
            </View>
            <Text style={styles.Mobiletxt}>
              Enter your mobile number, we'll send you an OTP to Verify
            </Text>
            <View style={styles.phoneInputView}>
              <TextInput placeholder={'+91'} style={styles.phoneInput} />
              <TextInput
                keyboardType="numeric"
                placeholder={'1234 5678'}
                style={[styles.phoneInput, {width: '75%'}]}
              />
            </View>
            <Text style={styles.option}>Optional</Text>
            <TextInput
              style={[styles.phoneInput, {width: '100%', marginTop: 10}]}
              placeholder={'Referal code'}
            />
            <View style={styles.confirmationView}>
              <Fontisto
                style={{marginRight: 10}}
                name={
                  this.state.checkBox ? 'checkbox-active' : 'checkbox-passive'
                }
                size={20}
                onPress={() => this.setState({checkBox: !this.state.checkBox})}
                color={GREY.semilight}
              />
              <Text style={styles.confirmationtxt}>
                I understand trade watch is not a financial advisor.
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Verification')}
              style={styles.SignInUp}>
              <Text style={styles.btntxt}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: WHITE.btntxtColor,
  },
  mainView: {
    width: SCREEN.width - 48,
    alignSelf: 'center',
  },
  HeaderTxt: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 28,
    color: BLACK.dark,
  },
  HeaderTxt2: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 18,
    color: BLACK.dark,
    marginTop: 5,
  },
  SignWith: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 18,
    color: BLACK.dark,
    textAlign: 'center',
    marginTop: 25,
  },
  SocialIconView: {
    flexDirection: 'row',
    marginTop: 25,
    width: SCREEN.width - 120,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  SocialIcon: {
    width: 37,
    height: 37,
  },
  orImage: {
    width: '100%',
    height: 24,
    alignSelf: 'center',
    marginTop: 25,
  },
  textInputView: {
    width: '100%',
    marginTop: 25,
    alignSelf: 'center',
  },
  txtInput: {
    height: 56,
    width: '100%',
    borderWidth: 1,
    borderColor: GREY.semilight,
    borderRadius: 20,
    paddingLeft: 22,
  },
  Mobiletxt: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 14,
    color: GREY.extraLight,
    marginTop: 25,
  },
  phoneInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  phoneInput: {
    height: 56,
    width: '20%',
    borderWidth: 1,
    borderColor: GREY.semilight,
    paddingLeft: 15,
    borderRadius: 20,
  },
  option: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 14,
    color: BLACK.dark,
    marginTop: 25,
  },
  confirmationView: {
    flexDirection: 'row',
    marginTop: 30,
  },
  confirmationtxt: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 14,
    color: BLACK.dark,
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
