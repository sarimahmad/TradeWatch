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
  TextInput,
} from 'react-native';
import {color, not} from 'react-native-reanimated';
import {BLACK, GREEN, GREY, ORANGE, Silver, WHITE} from '../../helper/Color';
import {FONT, SCREEN} from '../../helper/Constant';

var selectedItem = [];

export default class Watchlist extends Component {
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
  BellIcon = item => {
    if (selectedItem.includes(item)) {
      selectedItem = selectedItem.filter(index => item !== index);
      this.setState({changeSelected: !this.state.changeSelected});
    } else {
      selectedItem.push(item);
      this.setState({changeSelected: !this.state.changeSelected});
    }
  };
  bellImage(item) {
    for (var i = 0; i < this.state.array.length; i++) {
      if (item === this.state.array[i]) {
        return require('../../assets/ringing.png');
      } else {
        return require('../../assets/LightBell.png');
      }
    }
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
                <Text style={styles.HeaderTxt}>Watchlist</Text>
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
            <View style={styles.WatchlistView}>
              <View style={styles.DirectionRow}>
                <Image
                  style={styles.PlusSign}
                  source={require('../../assets/Plus.png')}
                />
                <Text style={styles.Watchlisttxt}>Add Watchlist</Text>
              </View>
              <View style={styles.DirectionRow}>
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
            <View style={[styles.WatchlistView, {marginTop: 25}]}>
              <TouchableOpacity
                onPress={() => this.setState({editText: 0})}
                style={this.state.editText === 0 && styles.borderLine}>
                <Text style={styles.itemTxt}>Stock</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({editText: 1})}
                style={this.state.editText === 1 && styles.borderLine}>
                <Text style={styles.itemTxt}>Crypto</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({editText: 2})}
                style={this.state.editText === 2 && styles.borderLine}>
                <Text style={styles.itemTxt}>Commodity</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.DetailListView}>
              <FlatList
                bounces={false}
                data={this.state.NewData}
                keyExtractor={(item, index) => index.toString()}
                extraData={this.state.changeSelected}
                renderItem={({item}) => (
                  <View style={styles.itemDetailView}>
                    <View>
                      <Text style={styles.ItemName}>{item.name}</Text>
                      <Text style={styles.ItemshortName}>{item.shortName}</Text>
                    </View>
                    <View style={[styles.DirectionRow]}>
                      <View style={{marginRight: 3}}>
                        <Text style={styles.ItemAmount}>${item.Amount}</Text>
                        <Text style={styles.itemPercentage}>
                          +{item.percentage}%
                        </Text>
                      </View>
                      <Image
                        style={styles.ArrowUp}
                        source={require('../../assets/ArrowUp.png')}
                      />
                    </View>
                    <View style={styles.DirectionRow}>
                      <TouchableOpacity onPress={() => this.BellIcon(item.id)}>
                        <Image
                          style={styles.BellIcon}
                          source={
                            selectedItem.includes(item.id)
                              ? require('../../assets/ringing.png')
                              : require('../../assets/LightBell.png')
                          }
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          style={styles.StartIcon}
                          source={
                            this.state.StartIcon
                              ? require('../../assets/Star.png')
                              : require('../../assets/Star.png')
                          }
                        />
                      </TouchableOpacity>
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
    width: SCREEN.width - 44,
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
  WatchlistView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  PlusSign: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  Watchlisttxt: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 16,
    color: GREEN.regular,
  },
  dollarIconSize: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  itemTxt: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 16,
    color: BLACK.dark,
    borderBottomWidth: 3,
    borderBottomColor: GREEN.regular,
    paddingBottom: 15,
  },
  borderLine: {
    borderBottomWidth: 5,
    borderBottomColor: GREEN.regular,
  },
  DetailListView: {
    marginTop: 20,
  },
  itemDetailView: {
    borderBottomWidth: 1,
    borderBottomColor: GREY.regular,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginBottom: 10,
  },
  ItemName: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 16,
    color: BLACK.dark,
  },
  ItemshortName: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 16,
    color: GREY.regular,
  },
  ArrowUp: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  ItemAmount: {
    fontFamily: FONT.Poppins.semiBold,
    fontSize: 12,
    color: BLACK.dark,
  },
  itemPercentage: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 11,
    color: GREEN.regular,
    textAlign: 'right',
  },
  BellIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  StartIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginLeft: 10,
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
