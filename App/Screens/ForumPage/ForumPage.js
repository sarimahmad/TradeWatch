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
  ScrollView,
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

export default class ForumPage extends Component {
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

              <Image
                style={styles.IconSearch}
                source={require('../../assets/IconSearch.png')}
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
          <View style={{flex: 1, backgroundColor: 'rgba(176, 176, 176, 0.2)'}}>
            <ScrollView bounces={false}>
              <View style={styles.postView}>
                <View style={styles.profilePicName}>
                  <Image
                    style={[styles.profileSize, {marginRight: 18}]}
                    source={require('../../assets/Profile.png')}
                  />
                  <View>
                    <Text style={[styles.HeaderTxt]}>
                      Lorem ipsum dolor sit
                    </Text>
                    <Text style={styles.lightTxt}>Angelina Rose</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '55%',
                      }}>
                      <Text style={styles.lightTxt}>Today</Text>
                      <View style={styles.DOT} />
                      <Text style={styles.lightTxt}>12:23:00 PM</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.LowerView}>
                  <Image
                    style={{
                      width: '100%',
                      height: SCREEN.height * 0.21,
                      marginTop: 25,
                      alignSelf: 'center',
                    }}
                    source={require('../../assets/PostImage.png')}
                  />
                  <Text style={[styles.detailTxt, {marginTop: 10}]}>
                    Until recently, the prevailing view assumed lorem ipsum was
                    born as a nonsense text.
                  </Text>

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
                    <Text style={styles.Count}>
                      2k <Text>Likes</Text>
                    </Text>
                    <Text style={styles.Count}>
                      2k <Text>Shares</Text>
                    </Text>
                    <Text style={styles.Count}>
                      2k <Text>Dislikes</Text>
                    </Text>
                    <Text style={styles.Count}>
                      2k <Text>Response</Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      marginBottom: 20,
                    }}>
                    <Text
                      style={[
                        styles.lightTxt,
                        {color: PURPLE.regular, marginRight: 20},
                      ]}>
                      Crypto
                    </Text>
                    <Text style={[styles.lightTxt, {marginRight: 20}]}>
                      2K views{' '}
                    </Text>
                    <Text style={[styles.lightTxt, {marginRight: 20}]}>
                      50 Response
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.postView, {marginTop: 20}]}>
                <View
                  style={{flexDirection: 'row', width: '90%', marginTop: 15}}>
                  <Image
                    style={[styles.profileSize, {marginRight: 10}]}
                    source={require('../../assets/Profile.png')}
                  />
                  <View style={{width: SCREEN.width * 0.63}}>
                    <TextInput
                      placeholder={'Enter Text Here'}
                      style={styles.TextArea}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                        marginBottom: 15,
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          style={styles.contactIcon}
                          source={require('../../assets/UploadIcon.png')}
                        />
                        <Image
                          style={styles.contactIcon}
                          source={require('../../assets/VideoIcon.png')}
                        />
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('AddPost')
                        }
                        style={styles.RespondBtn}>
                        <Text
                          style={[styles.Count, {color: WHITE.btntxtColor}]}>
                          Respond
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: 35,
                  alignItems: 'center',
                }}>
                <Text style={[styles.lightTxt, {marginRight: 7}]}>
                  Response order
                </Text>
                <Image
                  style={{width: 10, height: 10, marginRight: 5}}
                  source={require('../../assets/clock.png')}
                />
                <Text style={[styles.detailTxt, {marginRight: 10}]}>
                  Most liked
                </Text>
                <Image
                  style={{height: 10, width: 10}}
                  source={require('../../assets/ArrowDownBlack.png')}
                />
              </View>
              <View style={[styles.postView, {marginTop: 15}]}>
                <View style={[styles.profilePicName]}>
                  <Image
                    style={[styles.profileSize, {marginRight: 18}]}
                    source={require('../../assets/Profile.png')}
                  />
                  <View>
                    <Text style={[styles.HeaderTxt]}>
                      Lorem ipsum dolor sit
                    </Text>
                    <Text style={styles.lightTxt}>Angelina Rose</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '55%',
                      }}>
                      <Text style={styles.lightTxt}>Today</Text>
                      <View style={styles.DOT} />
                      <Text style={styles.lightTxt}>12:23:00 PM</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
                  <Text style={styles.detailTxt}>
                    Until recently, the prevailing view assumed lorem ipsum was
                    born as a nonsense text.
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={styles.LikeDislikeIcons}
                      source={require('../../assets/HeartIcon.png')}
                    />
                    <Image
                      style={styles.LikeDislikeIcons}
                      source={require('../../assets/heartcon2.png')}
                    />
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Text style={styles.Count}>
                      2k <Text>Likes</Text>
                    </Text>
                    <Text style={styles.Count}>
                      2k <Text>Dislikes</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.postView, {marginTop: 15}]}>
                <View style={[styles.profilePicName]}>
                  <Image
                    style={[styles.profileSize, {marginRight: 18}]}
                    source={require('../../assets/Profile.png')}
                  />
                  <View>
                    <Text style={[styles.HeaderTxt]}>
                      Lorem ipsum dolor sit
                    </Text>
                    <Text style={styles.lightTxt}>Angelina Rose</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '55%',
                      }}>
                      <Text style={styles.lightTxt}>Today</Text>
                      <View style={styles.DOT} />
                      <Text style={styles.lightTxt}>12:23:00 PM</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
                  <Text style={styles.detailTxt}>
                    Until recently, the prevailing view assumed lorem ipsum was
                    born as a nonsense text.
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={styles.LikeDislikeIcons}
                      source={require('../../assets/HeartIcon.png')}
                    />
                    <Image
                      style={styles.LikeDislikeIcons}
                      source={require('../../assets/heartcon2.png')}
                    />
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Text style={styles.Count}>
                      2k <Text>Likes</Text>
                    </Text>
                    <Text style={styles.Count}>
                      2k <Text>Dislikes</Text>
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.BorderLine} />

              <View style={{width: '90%', alignSelf: 'center'}}>
                <Text
                  style={[styles.detailTxt, {fontSize: 16, marginBottom: 17}]}>
                  Similar topics:
                </Text>

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
                      <Text style={styles.lightTxt}>Angelina Rose</Text>
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
                            styles.lightTxt,
                            {color: PURPLE.regular, marginRight: 20},
                          ]}>
                          Crypto
                        </Text>
                        <Text style={[styles.lightTxt, {marginRight: 20}]}>
                          2K views
                        </Text>
                        <Text style={[styles.lightTxt, {marginRight: 20}]}>
                          50 Response
                        </Text>
                      </View>
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
    fontSize: 16,
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
  SwiperImage: {
    height: 200,
    width: 200,
  },
  lightTxt: {
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
  postView: {
    width: SCREEN.width - 48,
    alignSelf: 'center',
    backgroundColor: WHITE.btntxtColor,
    borderRadius: 15,
    marginTop: 5,
  },
  profilePicName: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  LowerView: {
    width: '90%',
    alignSelf: 'center',
  },
  profileSize: {
    height: 56,
    width: 56,
    marginRight: 15,
    borderRadius: 25,
  },
  DOT: {
    height: 5,
    width: 5,
    backgroundColor: GREY.semilight,
    borderRadius: 10,
  },
  detailTxt: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 10,
    color: BLACK.dark,
  },
  Count: {
    fontFamily: FONT.Poppins.bold,
    fontSize: 8,
    marginRight: 5,
    color: GREY.semilight,
  },
  TextArea: {
    borderWidth: 0.17,
    borderColor: GREY.semilight,
    height: 71,
    width: '100%',
    borderRadius: 10,
  },
  contactIcon: {
    width: 16,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  RespondBtn: {
    width: 75,
    height: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GREEN.regular,
  },
  BorderLine: {
    borderBottomWidth: 1,
    borderBottomColor: GREEN.regular,
    width: SCREEN.width - 47,
    alignSelf: 'center',
    marginTop: 65,
    marginBottom: 20,
  },
});
