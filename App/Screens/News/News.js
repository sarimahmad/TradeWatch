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
  TextInput
} from 'react-native';
import {BLACK, GREEN, GREY, ORANGE, Silver, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NewData: [
        {
          id: 1,
          Comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          PersonProfile: 87397.02,
          PersonName: 'Alex H',
          Date: 'Today',
          timeAfterRead: '5m read',
        },
        {
          id: 2,
          Comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          PersonProfile: 87397.02,
          PersonName: 'Alex H',
          Date: 'Today',
          timeAfterRead: '5m read',
        },
        {
          id: 3,
          Comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          PersonProfile: 87397.02,
          PersonName: 'Alex H',
          Date: 'Today',
          timeAfterRead: '5m read',
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <View style={styles.HeaderView}>
              <View style={styles.HeaderStart}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <Image
                    style={[styles.backIcon]}
                    source={require('../../assets/ArrowLeft.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.HeaderTxt}>News</Text>
              </View>
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
            <View style={{marginTop: 10, height: '80%'}}>
              <FlatList
                data={this.state.NewData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={styles.newsItemView}>
                    <Image
                      style={styles.NewsImage}
                      source={require('../../assets/ImageNews.png')}
                    />
                    <Text style={styles.commentTxt}>{item.Comment}</Text>
                    <View style={styles.itemLowerView}>
                      <View style={styles.personDetailandLike}>
                        <Image
                          style={[styles.dropDownIcon, {alignSelf: 'center'}]}
                          source={require('../../assets/exampleProfile.png')}
                        />
                        <View>
                          <Text style={styles.personNametxt}>
                            {item.PersonName}
                          </Text>
                          <Text style={styles.Datetxt}>{item.Date}</Text>
                        </View>
                        <View style={styles.readorNotView}>
                          <View style={styles.DOT} />
                          <Text style={[styles.Datetxt]}>
                            {item.timeAfterRead}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={[
                          styles.personDetailandLike,
                          {alignItems: 'center'},
                        ]}>
                        <TouchableOpacity>
                          <Image
                            style={styles.likeShareIconSize}
                            source={require('../../assets/HeartIcon.png')}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image
                            style={styles.likeShareIconSize}
                            source={require('../../assets/shareIcon.png')}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image
                            style={styles.likeShareIconSize}
                            source={require('../../assets/heartcon2.png')}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
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
  HeaderStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderTxt: {
    fontFamily: FONT.Poppins.bold,
    fontSize: 36,
    color: BLACK.dark,
    marginRight: 10,
  },
  IconSearch: {
    width: 24,
    height: 24,
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
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
  newsItemView: {
    width: '100%',
    height: SCREEN.height * 0.34,
    marginBottom: 20,
    borderRadius: 5,
    // shadowColor: GREY.semilight,
    // shadowRadius: 1,
    // shadowOpacity: 1,
    // textShadowOffset: {width: 1, height: 1},
  },
  NewsImage: {
    width: '100%',
    height: SCREEN.height * 0.2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  commentTxt: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 14,
    color: BLACK.dark,
    width: '90%',
    alignSelf: 'center',
    lineHeight: 21,
    marginTop: 10,
  },

  itemLowerView: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  personDetailandLike: {
    flexDirection: 'row',
    width: '40%',
    height: 33,
    justifyContent: 'space-between',
  },
  personNametxt: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 12,
    color: ORANGE.regular,
  },
  Datetxt: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 10,
    color: GREY.regular,
  },
  DOT: {
    height: 5,
    width: 5,
    backgroundColor: GREY.semilight,
    borderRadius: 10,
  },
  likeShareIconSize: {
    width: 20,
    height: 20,
  },
  readorNotView: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  PlusBtn: {
    width: 30,
    height: 30,
    backgroundColor: GREEN.regular,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
