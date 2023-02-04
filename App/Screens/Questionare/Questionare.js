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

export default class Questionare extends Component {
  render() {
    return (
      <View style={styles.wrapperView}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                width: '65%',
                justifyContent: 'space-between',
              }}>
              <Image
                style={[styles.backIcon]}
                source={require('../../assets/ArrowLeft.png')}
              />
              <Text style={styles.HeaderTxt}>Questionnaire</Text>
            </View>
            <Text
              style={[
                styles.HeaderTxt,
                {fontFamily: FONT.Poppins.regular, marginTop: 28},
              ]}>
              Question 07 / 10
            </Text>
            <View style={styles.borderLine}>
              <View style={{width: '60%', backgroundColor:GREEN.regular, height:'100%'}} />
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
    width: SCREEN.width - 48,
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
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  HeaderTxt: {
    fontFamily: FONT.Poppins.bold,
    fontSize: 18,
    color: BLACK.dark,
  },
  borderLine: {
    width: '100%',
    height: 5,
    backgroundColor: GREY.semidark,
    marginTop: 8
  }
});
