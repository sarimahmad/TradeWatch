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
  FlatList,
} from 'react-native';
import {BLACK, GREEN, GREY, RED, Silver, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

export default class Locker extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <View style={styles.HeaderView}>
              <Text style={styles.HeaderTxt}>Locker</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={[styles.PlusBtn, {marginLeft: 10}]}>
                  <Image
                    style={{width: 16.5, height: 16.5}}
                    source={require('../../assets/plusBTN.png')}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    width: 30,
                    marginLeft: 10,
                    height: 30,
                    borderRadius: 20,
                    backgroundColor: GREEN.regular,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{width: 16, height: 16}}
                    source={require('../../assets/Notification.png')}
                  />
                </View>
              </View>
            </View>
            <View>
              <TextInput
                placeholder={'Search Here'}
                style={styles.seacrhInput}
              />
              <Image
                style={styles.SearchIcon}
                source={require('../../assets/IconSearch.png')}
              />
              <Image
                style={[
                  styles.SearchIcon,
                  {left: SCREEN.width / 1.3, height: 20},
                ]}
                source={require('../../assets/Voice.png')}
              />
            </View>
            <View style={styles.CryptoDetail}>
              <View style={styles.coinDetail}>
                <Image
                  style={styles.CoinSize}
                  source={require('../../assets/bitcoin.png')}
                />
                <Text style={styles.coinName}>Crypto</Text>

                <Image
                  style={styles.dropDownIcon}
                  source={require('../../assets/ArrowDownBlack.png')}
                />
              </View>
              <View style={styles.coinDetail}>
                <Image
                  style={[styles.CoinSize, {width: 10, height: 16}]}
                  source={require('../../assets/ethereum.png')}
                />
                <Text style={styles.coinName}>Etherium</Text>
                <Image
                  style={styles.dropDownIcon}
                  source={require('../../assets/ArrowDownBlack.png')}
                />
              </View>
            </View>
            <View style={styles.filterView}>
              <Image
                style={styles.filterIconSize}
                source={require('../../assets/Filter.png')}
              />
              <Text style={styles.filterTxt}>Driller</Text>
            </View>

            {/* Locker Feed */}
            <View style={[styles.FeedView, {marginTop: 10}]}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('News')}>
                <Image
                  style={styles.itemViewSize}
                  source={require('../../assets/News.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Watchlist')}>
                <Image
                  style={styles.itemViewSize}
                  source={require('../../assets/Watchlist.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={[styles.FeedView]}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Compare')}>
                <Image
                  style={styles.itemViewSize}
                  source={require('../../assets/Compare.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Videos')}>
                <Image
                  style={styles.itemViewSize}
                  source={require('../../assets/Videos.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.FeedView]}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ForumSurvey')}>
                <Image
                  style={styles.itemViewSize}
                  source={require('../../assets/ForumSurvey2.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.itemViewSize}
                  source={require('../../assets/Brokers.png')}
                />
              </TouchableOpacity>
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
  mainView: {
    width: SCREEN.width - 46,
    alignSelf: 'center',
  },
  HeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  HeaderTxt: {
    fontFamily: FONT.Poppins.bold,
    fontSize: 36,
    color: BLACK.dark,
  },
  IconSearch: {
    width: 24,
    height: 24,
  },
  CryptoDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  coinDetail: {
    flexDirection: 'row',
    width: SCREEN.width * 0.3,
    justifyContent: 'space-between',
  },
  coinName: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 14,
    color: BLACK.dark,
  },
  CoinSize: {
    height: 22.5,
    width: 22.5,
  },
  dropDownIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  filterView: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: GREY.regular,
    borderRadius: 10,
    width: SCREEN.width * 0.25,
    height: 32,
    marginTop: 10,
  },
  filterTxt: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 10,
    color: GREY.regular,
  },
  filterIconSize: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
  FeedView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  itemViewSize: {
    width: SCREEN.width * 0.4,
    height: SCREEN.height * 0.18,
    resizeMode: 'contain',
  },
  PlusBtn: {
    width: 30,
    height: 30,
    backgroundColor: GREEN.regular,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  seacrhInput: {
    backgroundColor: Silver.extraLight,
    paddingLeft: 60,
    height: 50,
    width: '100%',
    borderRadius: 15,
  },
  SearchIcon: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 15,
    left: 20,
  },
});
