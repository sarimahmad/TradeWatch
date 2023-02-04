/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {BLACK, GREEN, GREY, ORANGE, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={{flex: 1}}>
          <View style={[styles.mainView, {paddingBottom: 20}]}>
            <Text style={styles.HeaderTxt}>Settings</Text>
            <View
              style={[
                styles.DirectionRow,
                {marginTop: 10, justifyContent: 'space-between'},
              ]}>
              <View>
                <Text
                  style={[
                    styles.HeaderTxt,
                    {fontSize: 20, marginTop: 15, marginBottom: 5},
                  ]}>
                  Amina Fathima
                </Text>
                <View style={styles.DirectionRow}>
                  <Text style={styles.EditProfletxt}>Edit Profile</Text>
                  <TouchableOpacity>
                    <Image
                      style={styles.editIcon}
                      source={require('../../assets/Edit.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={[styles.DirectionRow, {marginTop: 25}]}>
                  <TouchableOpacity>
                    <Image
                      style={styles.inviteIcon}
                      source={require('../../assets/AddUser.png')}
                    />
                  </TouchableOpacity>
                  <Text style={styles.EditProfletxt}>invite friends</Text>
                </View>
              </View>
              <View style={styles.logoutView}>
                <Image
                  style={styles.profileImage}
                  source={require('../../assets/Profile.png')}
                />
                <View
                  style={[
                    styles.DirectionRow,
                    {marginTop: 15, justifyContent: 'space-between'},
                  ]}>
                  <Image
                    style={styles.LogoutIcon}
                    source={require('../../assets/Logout.png')}
                  />
                  <Text style={styles.logouttxt}>LogOut</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{flex: 1, backgroundColor: 'rgba(159, 159, 159, 0.1)'}}>
            <ScrollView bounces={false}>
              <View style={styles.mainView}>
                <View style={[styles.itemView]}>
                  <View>
                    <Text
                      style={[
                        styles.itemTxt,
                        {fontFamily: FONT.Poppins.regular},
                      ]}>
                      Language
                    </Text>
                    <Text style={styles.itemTxt}>English</Text>
                  </View>
                  <TouchableOpacity style={styles.languageChangebtn}>
                    <Text style={styles.changeTxt}>Change</Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.itemView]}>
                  <Text style={styles.itemTxt}>Wallet</Text>
                </View>
                <View style={[styles.itemView]}>
                  <Text style={styles.itemTxt}>My Activity</Text>
                </View>
                <View style={[styles.itemView]}>
                  <Text style={styles.itemTxt}>Referral Code</Text>
                </View>
                <View style={[styles.itemView]}>
                  <Text style={styles.itemTxt}>Contact Support</Text>
                </View>
                <View style={[styles.itemView]}>
                  <Text style={styles.itemTxt}>Term of Services</Text>
                </View>
              </View>
            </ScrollView>
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
    width: SCREEN.width - 47,
    alignSelf: 'center',
  },
  HeaderTxt: {
    fontFamily: FONT.Poppins.bold,
    fontSize: 36,
    color: BLACK.dark,
    marginRight: 10,
  },
  DirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileView: {
    flexDirection: 'row',
  },
  EditProfletxt: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 14,
    color: GREEN.regular,
  },
  editIcon: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
  inviteIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  logoutView: {
    alignSelf: 'center',
  },
  LogoutIcon: {
    width: 24,
    height: 24,
  },
  logouttxt: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 14,
    color: GREY.semilight,
  },
  itemView: {
    borderBottomWidth: 1,
    borderColor: GREY.regular,
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  itemTxt: {
    fontFamily: FONT.Poppins.bold,
    fontSize: 14,
    color: BLACK.dark,
  },
  languageChangebtn: {
    width: 90,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: GREEN.regular,
  },
  changeTxt: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 14,
    color: WHITE.btntxtColor,
  },
});
