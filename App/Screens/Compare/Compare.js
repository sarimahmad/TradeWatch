/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput
} from 'react-native';
import {BLACK, GREEN, GREY, Silver, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

export default class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editText: 0,
      BellIcon: false,
      StartIcon: false,
      changeSelected: true,
      NewData: [
        {
          id: 1,
          name: 'Bitcoin',
          shortName: 'BTC',
          Amount: 87397.02,
          percentage: 132,
        },
        {
          id: 2,
          name: 'Bitcoin',
          shortName: 'BTC',
          Amount: 87397.02,
          percentage: 132,
        },
        {
          id: 3,
          name: 'Bitcoin',
          shortName: 'BTC',
          Amount: 87397.02,
          percentage: 132,
        },
        {
          id: 4,
          name: 'Bitcoin',
          shortName: 'BTC',
          Amount: 87397.02,
          percentage: 132,
        },
        {
          id: 5,
          name: 'Bitcoin',
          shortName: 'BTC',
          Amount: 87397.02,
          percentage: 132,
        },
        {
          id: 6,
          name: 'Bitcoin',
          shortName: 'BTC',
          Amount: 87397.02,
          percentage: 132,
        },
      ],
    };
  }
  SummaryData(item1, item2, item3) {
    return (
      <View style={[styles.SummarItems]}>
        <View
          style={{
            height: 10,
            width: '40%',
          }}>
          <Text style={styles.itemtxt}>{item1}</Text>
        </View>
        <View
          style={{
            height: 10,
            width: '30%',
          }}>
          <Text style={styles.itemtxt}>{item2}</Text>
        </View>
        <View style={{height: 10, width: '30%'}}>
          <Text style={styles.itemtxt}>{item3}</Text>
        </View>
      </View>
    );
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
                <Text style={styles.HeaderTxt}>Compare</Text>
                <Image
                  style={styles.dropDownIcon}
                  source={require('../../assets/ArrowDownBlack.png')}
                />
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
            <ScrollView style={{height: SCREEN.height / 1.2}}>
              <View style={styles.CryptoDetail}>
                <View style={{width: '45%'}}>
                  <Text style={styles.CategoryTxt}>Primary</Text>
                  <View style={styles.BoxView}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={styles.CoinIcon}
                        source={require('../../assets/bitcoin.png')}
                      />
                      <Text style={styles.BoxTxt}>Crypto</Text>
                    </View>
                    <Image
                      style={styles.dropDownIcon}
                      source={require('../../assets/ArrowDownBlack.png')}
                    />
                  </View>
                </View>
                <View style={{width: '45%'}}>
                  <Text style={styles.CategoryTxt}>Secondary</Text>
                  <View style={styles.BoxView}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={styles.CoinIcon}
                        source={require('../../assets/Chart.png')}
                      />
                      <Text style={styles.BoxTxt}>Crypto</Text>
                    </View>
                    <Image
                      style={styles.dropDownIcon}
                      source={require('../../assets/ArrowDownBlack.png')}
                    />
                  </View>
                </View>
              </View>

              <View style={[styles.CryptoDetail, {marginTop: 10}]}>
                <View style={{width: '45%'}}>
                  <View style={styles.BoxView}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={styles.CoinIcon}
                        source={require('../../assets/bitcoin.png')}
                      />
                      <Text style={styles.BoxTxt}>Crypto</Text>
                    </View>
                    <Image
                      style={styles.dropDownIcon}
                      source={require('../../assets/ArrowDownBlack.png')}
                    />
                  </View>
                </View>
                <Image
                  style={styles.SwapIcon}
                  source={require('../../assets/Swap.png')}
                />
                <View style={{width: '45%'}}>
                  <View style={styles.BoxView}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={styles.CoinIcon}
                        source={require('../../assets/teslaIcon.png')}
                      />
                      <Text style={styles.BoxTxt}>Crypto</Text>
                    </View>
                    <Image
                      style={styles.dropDownIcon}
                      source={require('../../assets/ArrowDownBlack.png')}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.ComparisonChartView}>
                <Text style={[styles.HeaderTxt, {fontSize: 16}]}>
                  Comparison Chart
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.dollarIconSize}
                    source={require('../../assets/dollar.png')}
                  />
                  <Image
                    style={styles.dropDownIcon}
                    source={require('../../assets/ArrowDownBlack.png')}
                  />
                </View>
              </View>
              <Image
                style={{width: '100%', height: SCREEN.height / 2}}
                source={require('../../assets/Frame.png')}
              />

              <View
                style={{
                  borderBottomColor: GREY.semilight,
                  borderBottomWidth: 1,
                  width: '100%',
                }}>
                <Image
                  style={{width: '90%', alignSelf: 'center', height: 20}}
                  source={require('../../assets/date.png')}
                />
              </View>
              <Text style={[styles.HeaderTxt, {fontSize: 18, marginTop: 20}]}>
                Summary
              </Text>

              <View style={styles.summaryView}>
                <View style={[styles.SummarItems, {marginTop: 18}]}>
                  <View
                    style={{
                      height: 10,
                      width: '40%',
                    }}>
                    <Text style={styles.itemtxt}>Name</Text>
                  </View>
                  <View
                    style={{
                      height: 10,
                      width: '30%',
                    }}>
                    <Text style={styles.itemtxt}>Bitcoin</Text>
                  </View>
                  <View style={{height: 10, width: '30%'}}>
                    <Text style={styles.itemtxt}>Tesla</Text>
                  </View>
                </View>

                <View style={[styles.SummarItems]}>
                  <View
                    style={{
                      height: 10,
                      width: '40%',
                    }}>
                    <Text
                      style={[styles.itemtxt, {fontFamily: FONT.Poppins.bold}]}>
                      Name
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 10,
                      width: '30%',
                    }}>
                    <Text
                      style={[styles.itemtxt, {fontFamily: FONT.Poppins.bold}]}>
                      Bitcoin
                    </Text>
                  </View>
                  <View style={{height: 10, width: '30%'}}>
                    <Text
                      style={[styles.itemtxt, {fontFamily: FONT.Poppins.bold}]}>
                      Tesla
                    </Text>
                  </View>
                </View>
                {this.SummaryData('Highest Price', '$630,82', '$630,82')}
                {this.SummaryData('Lowest Price', '$630,82', '$630,82')}
                {this.SummaryData('Market Cap', '$630,82', '$630,82')}
                {this.SummaryData('Circulation Supply', '-', '-')}
                {this.SummaryData('24h Trading Volume', '-', '-')}
                {this.SummaryData('Dividend', 'NO', 'NO')}
                {this.SummaryData('Last Dividend Date', '-', '-')}
                {this.SummaryData('Last Dividend Provided', '-', '-')}
                {this.SummaryData('Next Dividend Date', '-', '-')}
              </View>
              <View style={{flex:1,marginTop:20 ,backgroundColor: 'rgba(176, 176, 176, 0.2)'}}>
                    <Text style={[styles.HeaderTxt,{marginTop:23, fontSize: 14,fontFamily: FONT.Poppins.semiBold}]}>Other Bitcoin Related Information</Text>
                    <View style={styles.NewsItemFirst}>
                      <View style={styles.News}>
                        <Image 
                        style={styles.NewPicSize}
                        source={require('../../assets/NewsFirst1.png')}/>
                        <View style={styles.NewsLowerView}>
                          <Text style={styles.NewsLowerViewTxt}>News</Text>
                          <Text style={[styles.NewsLowerViewTxt,{fontSize:4}]}>Lorem Ipsum is simply dummy text of the printing.</Text>
                        </View>
                      </View>
                      <View style={styles.News}>
                      <Image
                        style={styles.NewPicSize}
                        source={require('../../assets/NewsFirst2.png')}/>
                        <View style={styles.NewsLowerView}>
                          <Text style={styles.NewsLowerViewTxt}>Videos</Text>
                          <Text style={[styles.NewsLowerViewTxt,{fontSize:4}]}>Lorem Ipsum is simply dummy text of the printing.</Text>
                        </View>
                      </View>
                      <View style={styles.News}>
                      <Image 
                        style={styles.NewPicSize}
                        source={require('../../assets/NewsFirst3.png')}/>
                                                <View style={styles.NewsLowerView}>
                          <Text style={styles.NewsLowerViewTxt}>Forum</Text>
                          <Text style={[styles.NewsLowerViewTxt,{fontSize:4}]}>Lorem Ipsum is simply dummy text of the printing.</Text>
                        </View>
                      </View>
                    </View>


                    <Text style={[styles.HeaderTxt,{marginTop:20, fontSize: 14,fontFamily: FONT.Poppins.semiBold}]}>Other Tesla Related Information</Text>
                    <View style={styles.NewsItemFirst}>
                      <View style={styles.News}>
                        <Image 
                        style={styles.NewPicSize}
                        source={require('../../assets/newsSecond1.png')}/>
                        <View style={styles.NewsLowerView}>
                          <Text style={styles.NewsLowerViewTxt}>News</Text>
                          <Text style={[styles.NewsLowerViewTxt,{fontSize:4}]}>Lorem Ipsum is simply dummy text of the printing.</Text>
                        </View>
                      </View>
                      <View style={styles.News}>
                      <Image
                        style={styles.NewPicSize}
                        source={require('../../assets/newsSecond2.png')}/>
                        <View style={styles.NewsLowerView}>
                          <Text style={styles.NewsLowerViewTxt}>Videos</Text>
                          <Text style={[styles.NewsLowerViewTxt,{fontSize:4}]}>Lorem Ipsum is simply dummy text of the printing.</Text>
                        </View>
                      </View>
                      <View style={styles.News}>
                      <Image 
                        style={styles.NewPicSize}
                        source={require('../../assets/newsSecond3.png')}/>
                                                <View style={styles.NewsLowerView}>
                          <Text style={styles.NewsLowerViewTxt}>Forum</Text>
                          <Text style={[styles.NewsLowerViewTxt,{fontSize:4}]}>Lorem Ipsum is simply dummy text of the printing.</Text>
                        </View>
                      </View>
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
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  dropDownIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  IconSearch: {
    width: 24,
    height: 24,
  },
  DirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CryptoDetail: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  CategoryTxt: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 12,
    color: GREY.semilight,
    marginBottom: 5,
  },
  BoxView: {
    borderWidth: 1,
    borderColor: GREY.regular,
    height: 37,
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 9,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CoinIcon: {
    height: 22.5,
    width: 22.5,
    marginRight: 5,
  },
  BoxTxt: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 13,
    color: BLACK.dark,
  },
  SwapIcon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  ComparisonChartView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  dollarIconSize: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  summaryView: {
    width: '100%',
    height: SCREEN.height * 0.35,
    borderWidth: 1,
    borderColor: GREY.semilight,
    borderRadius: 10,
  },
  SummarItems: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  itemtxt: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 10,
    color: GREY.extraLight,
  },
  NewsItemFirst:{
    width: '100%',
    justifyContent: 'space-between',
    flexDirection:'row',
    marginTop: 15
  },
  News:{
    height: SCREEN.height * 0.15,
    width: 96,
    borderRadius: 15,
  },
  NewPicSize:{
    width:   96,
    height: 92,
    resizeMode:'contain'
  },
  NewsLowerView:{
    width:'100%',
    height: 50,
    backgroundColor:WHITE.btntxtColor,

  },
  NewsLowerViewTxt:{
    fontFamily: FONT.Poppins.regular,
    fontSize: 8,
    color: BLACK.dark,
    marginTop:3,
    marginLeft: 5
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
