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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CoinData: [
        {
          id: 1,
          name: 'BITCOIN',
          nickName: 'BTC',
          amount: 87397.02,
          percentage: 132,
          pic: require('../../assets/bitcoin.png'),
          rate: 0,
        },
        {
          id: 2,
          name: 'DOGE',
          nickName: 'DOGE',
          amount: 0.3422,
          percentage: 0.32,
          pic: require('../../assets/doge.png'),
          rate: 0,
        },
        {
          id: 3,
          name: 'BINANCE',
          nickName: 'BNB',
          amount: 343.2,
          percentage: 0.232,
          pic: require('../../assets/binance.png'),
          rate: 1,
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.MainView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                  {left: SCREEN.width / 1.7, height: 20},
                ]}
                source={require('../../assets/Voice.png')}
              />

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
            <View style={styles.TopTrending}>
              <Text style={styles.DarkBlack}>Top Trending</Text>
              <View style={styles.TrendingMargin}>
                <FlatList
                  data={this.state.CoinData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <View style={styles.CoinDetailView}>
                      <View style={styles.CoinImageView}>
                        <Image style={styles.CoinImage} source={item.pic} />
                        <View>
                          <Text style={styles.CoinName}>{item.name}</Text>
                          <Text style={styles.CoinShorName}>
                            {item.nickName}
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={styles.RateLine}
                        source={
                          item.rate === 0
                            ? require('../../assets/greenLine.png')
                            : require('../../assets/redLine.png')
                        }
                      />
                      <View style={styles.RateView}>
                        <Text style={styles.Amount}>${item.amount}</Text>
                        <View style={styles.percentageView}>
                          <Image
                            style={styles.UpDownArrow}
                            source={
                              item.rate === 0
                                ? require('../../assets/UpArrow.png')
                                : require('../../assets/DownArrow.png')
                            }
                          />
                          <Text
                            style={[
                              styles.percentageTxt,
                              {
                                color:
                                  item.rate === 0 ? GREEN.regular : RED.regular,
                              },
                            ]}>
                            {item.percentage}%
                          </Text>
                        </View>
                      </View>
                    </View>
                  )}
                />
                <Image
                  style={styles.ArrowDown}
                  source={require('../../assets/ArrowDown.png')}
                />
              </View>
            </View>
            <View style={styles.categoriesView}>
              <Text style={[styles.DarkBlack, {fontSize: 24}]}>Categories</Text>
              <View style={styles.categoryDirection}>
                <View style={styles.ItemView}>
                  <Image
                    style={styles.CategoryImage}
                    source={require('../../assets/Stocks.png')}
                  />
                  <View style={styles.transparentView} />
                  <Text style={styles.categoriesNametxt}>Stocks</Text>
                </View>
                <View style={styles.ItemView}>
                  <Image
                    style={styles.CategoryImage}
                    source={require('../../assets/Crypto.png')}
                  />
                  <View style={styles.transparentView} />
                  <Text style={styles.categoriesNametxt}>Crypto</Text>
                </View>
              </View>
              <View style={styles.categoryDirection}>
                <View style={styles.ItemView}>
                  <Image
                    style={styles.CategoryImage}
                    source={require('../../assets/community.png')}
                  />
                  <View style={styles.transparentView} />
                  <Text style={styles.categoriesNametxt}>Community</Text>
                </View>
                <View style={styles.ItemView}>
                  <Image
                    style={styles.CategoryImage}
                    source={require('../../assets/ForumSurvey.png')}
                  />
                  <View style={styles.transparentView} />
                  <Text style={styles.categoriesNametxt}>Forum & Survey</Text>
                </View>
              </View>
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
  MainView: {
    width: SCREEN.width - 48,
    alignSelf: 'center',
  },
  seacrhInput: {
    backgroundColor: Silver.extraLight,
    paddingLeft: 60,
    height: 50,
    width: '80%',
    borderRadius: 15,
  },
  SearchIcon: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 15,
    left: 20,
  },
  TopTrending: {
    width: SCREEN.width - 48,
    height: SCREEN.height * 0.34,
    marginTop: 30,
    // shadowColor: GREY.regular,
    // shadowOffset: {width: 5, height: 5},
    // shadowOpacity: 5,
  },
  DarkBlack: {
    fontFamily: FONT.Poppins.bold,
    fontSize: 20,
    color: BLACK.dark,
    marginTop: 20,
    marginLeft: 20,
  },
  CoinDetailView: {
    flexDirection: 'row',
    width: '90%',
    height: 40,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  TrendingMargin: {
    marginTop: 20,
    height: '60%',
  },
  CoinImageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CoinImage: {
    height: 23,
    width: 23,
    marginRight: 10,
  },
  CoinName: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 18,
    color: BLACK.dark,
  },
  CoinShorName: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 12,
    color: GREY.regular,
  },
  RateLine: {
    width: 90,
    height: 35,
    alignSelf: 'center',
  },
  Amount: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 14,
    color: BLACK.dark,
  },
  percentageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  UpDownArrow: {
    height: 6,
    width: 6,
    marginRight: 5,
  },
  percentageTxt: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 10.7,
  },
  RateView: {
    width: '40%',
  },
  ArrowDown: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  ItemView: {
    width: SCREEN.width * 0.42,
    height: 92,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  categoryDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  CategoryImage: {
    width: SCREEN.width * 0.42,
    height: 92,
    borderRadius: 15,
  },
  transparentView: {
    position: 'absolute',
    backgroundColor: BLACK.dark,
    opacity: 0.4,
    height: '40%',
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  categoriesNametxt: {
    color: WHITE.btntxtColor,
    fontFamily: FONT.Poppins.bold,
    position: 'absolute',
    fontSize: 14,
    bottom: 5,
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
