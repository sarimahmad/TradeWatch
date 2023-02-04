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
import RNPickerSelect from 'react-native-picker-select';

export default class AddSurvey extends Component {
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
        <SafeAreaView>
          <View style={styles.HeaderView}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.headerTxt}>Cancel</Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.headerTxt,
                {
                  fontFamily: FONT.Poppins.bold,
                  fontSize: 18,
                  color: BLACK.dark,
                },
              ]}>
              Post Survey
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.headerTxt,
                  {fontFamily: FONT.Poppins.semiBold, color: GREEN.regular},
                ]}>
                Release
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View
          style={[
            styles.wrapperView,
            {backgroundColor: 'rgba(176, 176, 176, 0.2)'},
          ]}>
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.mainView}>
              <TextInput
                style={styles.TextArea}
                placeholder={'Enter your survey title here...'}
              />
              <View
                style={{
                  alignSelf: 'flex-end',
                  marginTop: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    styles.headerTxt,
                    {fontFamily: FONT.Poppins.bold, marginRight: 8},
                  ]}>
                  Active until:
                </Text>
                <RNPickerSelect
                  Icon={() => {
                    return (
                      <Image
                        style={{
                          width: 18,
                          height: 18,
                          marginTop: 7,
                          marginRight: 10,
                        }}
                        source={require('../../assets/ArrowDownBlack.png')}
                      />
                    );
                  }}
                  style={{
                    inputIOS: {
                      height: 30,
                      width: 90,
                    },
                    inputAndroid: {
                      height: 30,
                      width: 90,
                    },
                  }}
                  PL
                  placeholder={{
                    label: 'Time',
                  }}
                  selectedValue={this.state.ProductType}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ProductType: itemValue})
                  }
                  items={[
                    {label: '1 Hours', value: 1},
                    {label: '2 Hours', value: 2},
                  ]}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  placeholder={'Ente Question'}
                  style={[
                    styles.TextArea,
                    {height: 31, width: '90%', marginTop: 0, borderRadius: 5},
                  ]}
                />
                <Image
                  style={{width: 18, height: 18}}
                  source={require('../../assets/UploadIcon.png')}
                />
              </View>
              <RNPickerSelect
                Icon={() => {
                  return (
                    <Image
                      style={{
                        width: 18,
                        height: 18,
                        marginTop: 35,
                        marginRight: 10,
                      }}
                      source={require('../../assets/ArrowDownBlack.png')}
                    />
                  );
                }}
                style={{
                  inputIOS: {
                    paddingBottom: 5,
                    backgroundColor: WHITE.btntxtColor,
                    height: 31,
                    borderRadius: 5,
                    width: SCREEN.width - 48,
                    paddingLeft: 10,
                    marginTop: 10,
                  },
                  inputAndroid: {
                    paddingBottom: 5,
                    backgroundColor: WHITE.btntxtColor,
                    height: 31,
                    borderRadius: 5,
                    width: SCREEN.width - 48,
                    paddingLeft: 10,
                    marginTop: 10,
                  },
                }}
                PL
                placeholder={{
                  label: 'Show answer',
                }}
                selectedValue={this.state.ProductType}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ProductType: itemValue})
                }
                items={[
                  {label: 'Vehicle', value: 1},
                  {label: 'Pakage', value: 2},
                ]}
              />
              <TextInput
                style={{
                  width: '50%',
                  borderBottomColor: GREY.semilight,
                  borderBottomWidth: 0.5,
                  marginTop: 20,
                }}
                placeholder={'Short answer text'}
              />
              <TouchableOpacity style={styles.PlusBtn}>
                <Image
                  style={{width: 9, height: 9}}
                  source={require('../../assets/plusBTN.png')}
                />
              </TouchableOpacity>

              <RNPickerSelect
                Icon={() => {
                  return (
                    <Image
                      style={{
                        width: 18,
                        height: 18,
                        marginTop: 35,
                        marginRight: 10,
                      }}
                      source={require('../../assets/ArrowDownBlack.png')}
                    />
                  );
                }}
                style={{
                  inputIOS: {
                    paddingBottom: 5,
                    backgroundColor: WHITE.btntxtColor,
                    height: 30,
                    borderRadius: 5,
                    width: SCREEN.width - 48,
                    paddingLeft: 10,
                    marginTop: 30,
                  },
                  inputAndroid: {
                    paddingBottom: 5,
                    backgroundColor: WHITE.btntxtColor,
                    height: 30,
                    borderRadius: 5,
                    width: SCREEN.width - 48,
                    paddingLeft: 10,
                    marginTop: 30,
                  },
                }}
                PL
                placeholder={{
                  label: 'Select a Category',
                }}
                selectedValue={this.state.ProductType}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ProductType: itemValue})
                }
                items={[
                  {label: 'Vehicle', value: 1},
                  {label: 'Pakage', value: 2},
                ]}
              />

              <RNPickerSelect
                Icon={() => {
                  return (
                    <Image
                      style={{
                        width: 18,
                        height: 18,
                        marginTop: 15,
                        marginRight: 10,
                      }}
                      source={require('../../assets/ArrowDownBlack.png')}
                    />
                  );
                }}
                style={{
                  inputIOS: {
                    paddingBottom: 5,
                    backgroundColor: WHITE.btntxtColor,
                    height: 30,
                    borderRadius: 5,
                    width: SCREEN.width - 48,
                    paddingLeft: 10,
                    marginTop: 10,
                  },
                  inputAndroid: {
                    paddingBottom: 5,
                    backgroundColor: WHITE.btntxtColor,
                    height: 30,
                    borderRadius: 5,
                    width: SCREEN.width - 48,
                    paddingLeft: 10,
                    marginTop: 10,
                  },
                }}
                PL
                placeholder={{
                  label: 'Select a Category',
                }}
                selectedValue={this.state.ProductType}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ProductType: itemValue})
                }
                items={[
                  {label: 'Vehicle', value: 1},
                  {label: 'Pakage', value: 2},
                ]}
              />

              <RNPickerSelect
                Icon={() => {
                  return (
                    <Image
                      style={{
                        width: 18,
                        height: 18,
                        marginTop: 15,
                        marginRight: 10,
                      }}
                      source={require('../../assets/ArrowDownBlack.png')}
                    />
                  );
                }}
                style={{
                  inputIOS: {
                    paddingBottom: 5,
                    backgroundColor: WHITE.btntxtColor,
                    height: 30,
                    borderRadius: 5,
                    width: SCREEN.width - 48,
                    paddingLeft: 10,
                    marginTop: 10,
                  },
                  inputAndroid: {
                    paddingBottom: 5,
                    backgroundColor: WHITE.btntxtColor,
                    height: 30,
                    borderRadius: 5,
                    width: SCREEN.width - 48,
                    paddingLeft: 10,
                    marginTop: 10,
                  },
                }}
                PL
                placeholder={{
                  label: 'Select a Category',
                }}
                selectedValue={this.state.ProductType}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ProductType: itemValue})
                }
                items={[
                  {label: 'Vehicle', value: 1},
                  {label: 'Pakage', value: 2},
                ]}
              />
            </View>
          </SafeAreaView>
        </View>
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
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 25,
  },
  headerTxt: {
    fontFamily: FONT.Poppins.regular,
    fontSize: 16,
    color: GREY.semilight,
  },
  TextArea: {
    width: SCREEN.width - 48,
    height: 56,
    backgroundColor: WHITE.btntxtColor,
    paddingLeft: 15,
    paddingTop: 5,
    marginTop: SCREEN.height * 0.08,
    borderRadius: 10,
  },
  addPictureBtn: {
    width: 92,
    height: 92,
    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  PlusBtn: {
    width: 28,
    height: 28,
    backgroundColor: GREEN.regular,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 30,
  },
});
