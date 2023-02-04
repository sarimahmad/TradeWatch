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

export default class AddPost extends Component {
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
              Post question
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
                placeholder={'Enter a title for your post here....'}
              />
              <TextInput
                multiline={true}
                numberOfLines={100}
                style={[
                  styles.TextArea,
                  {height: SCREEN.height * 0.231, marginTop: 15},
                ]}
                placeholder={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              />
              <TouchableOpacity style={styles.addPictureBtn}>
                <Image
                  style={{width: 28, height: 28}}
                  source={require('../../assets/PlusIcon2.png')}
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
});
