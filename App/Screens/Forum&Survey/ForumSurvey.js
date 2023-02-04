/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-keys */
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
import {
  BLACK,
  GREEN,
  GREY,
  PURPLE,
  RED,
  Silver,
  WHITE,
} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';
import Carousel from 'react-native-snap-carousel';

export default class ForumSurvey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editType: 1,
      NewData: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}],
      CaroualItem: [
        {id: 1, image: require('../../assets/pic.png')},
        {id: 1, image: require('../../assets/pic.png')},
        {id: 2, image: require('../../assets/pic.png')},
        {id: 3, image: require('../../assets/pic.png')},
        {id: 4, image: require('../../assets/pic.png')},
        {id: 5, image: require('../../assets/pic.png')},
        {id: 6, image: require('../../assets/pic.png')},
      ],
    };
  }
  _renderItem = ({item, index}) => {
    return (
      <View>
        <Image
          style={{width: 200, height: 200, borderRadius: 10}}
          source={item.image}
        />
        <Text
          style={{
            position: 'absolute',
            fontFamily: FONT.Poppins.semiBold,
            fontSize: 20,
            color: WHITE.btntxtColor,
            bottom: 20,
            left: 10,
          }}>
          Latest{'\n'}
          Topics
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <View style={styles.HeaderView}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={styles.backIcon}
                  source={require('../../assets/ArrowLeft.png')}
                />
              </TouchableOpacity>

              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={[styles.PlusBtnHeader, {marginLeft: 10}]}>
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
            <View style={styles.ForumSurveyView}>
              <TouchableOpacity
                onPress={() => this.setState({editType: 1})}
                style={[
                  styles.ForumSurvey,
                  {borderBottomWidth: this.state.editType === 1 ? 2 : 0},
                ]}>
                <Text style={styles.HeaderTxt}>Forum</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({editType: 2})}
                style={[
                  styles.ForumSurvey,
                  {borderBottomWidth: this.state.editType === 2 ? 2 : 0},
                ]}>
                <Text style={styles.HeaderTxt}>Survey</Text>
              </TouchableOpacity>
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
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(176, 176, 176, 0.2)',
            }}>
            <View style={[styles.mainView, {marginTop: 25}]}>
              <Text style={[styles.HeaderTxt, {fontSize: 18}]}>Topics</Text>
            </View>
            <View style={{marginBottom: 25}}>
              <Carousel
                ref={c => {
                  this._carousel = c;
                }}
                data={this.state.CaroualItem}
                renderItem={this._renderItem}
                firstItem={1}
                sliderWidth={SCREEN.width}
                itemWidth={SCREEN.width * 0.5}
              />
            </View>

            <View style={{flex: 1}}>
              <FlatList
                data={this.state.NewData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View
                    style={{
                      width: SCREEN.width - 48,
                      alignSelf: 'center',
                      height: 128,
                      marginBottom: 15,
                      borderRadius: 10,
                      backgroundColor: WHITE.btntxtColor,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: 30,
                          marginLeft: 13,
                          marginTop: 10,
                        }}
                        source={require('../../assets/Profile.png')}
                      />
                      <View
                        style={{
                          flex: 1,
                          marginLeft: 10,
                          justifyContent: 'center',
                        }}>
                        <Text style={[styles.HeaderTxt, {fontSize: 14}]}>
                          Lorem ipsum dolor sit
                        </Text>
                        <Text style={styles.nameTxt}>Angelina Rose</Text>
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            style={styles.LikeDislikeIcons}
                            source={require('../../assets/HeartIcon.png')}
                          />
                          <Image
                            style={styles.LikeDislikeIcons}
                            source={require('../../assets/shareIcon.png')}
                          />
                          <Image
                            style={styles.LikeDislikeIcons}
                            source={require('../../assets/heartcon2.png')}
                          />
                          <Image
                            style={styles.LikeDislikeIcons}
                            source={require('../../assets/message.png')}
                          />
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                          <Text
                            style={[
                              styles.nameTxt,
                              {color: PURPLE.regular, marginRight: 20},
                            ]}>
                            Crypto
                          </Text>
                          <Text style={[styles.nameTxt, {marginRight: 20}]}>
                            2K views{' '}
                          </Text>
                          <Text style={[styles.nameTxt, {marginRight: 20}]}>
                            50 Response
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              />
              <TouchableOpacity
                onPress={() => this.state.editType ===1 ? this.props.navigation.navigate('ForumPage'): this.props.navigation.navigate("AddSurvey")}
                style={[styles.PlusBtn]}>
                <Image
                  style={{width: 16.5, height: 16.5}}
                  source={require('../../assets/plusBTN.png')}
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
    width: SCREEN.width - 55,
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
  backIcon: {
    width: 29,
    height: 25,
  },
  ForumSurveyView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ForumSurvey: {
    width: '40%',
    borderBottomWidth: 2,
    borderBottomColor: GREEN.regular,
    paddingBottom: 10,
    alignItems: 'center',
  },
  HeaderTxt: {
    fontFamily: FONT.Poppins.bold,
    fontSize: 24,
    color: BLACK.dark,
  },
  CryptoDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
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
  SwiperView: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  SwiperImage: {
    height: 200,
    width: 200,
  },
  nameTxt: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 10,
    color: GREY.semilight,
  },
  LikeDislikeIcons: {
    width: 16,
    height: 16,
    marginRight: 15,
    marginTop: 10,
  },
  PlusBtn: {
    width: 56,
    height: 56,
    backgroundColor: GREEN.regular,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 30,
    bottom: 0,
    right: 40,
  },
  PlusBtnHeader: {
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
