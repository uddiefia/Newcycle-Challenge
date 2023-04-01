import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    marginLeft: 10,
    borderRadius: 30,
    marginRight: 10,
    backgroundColor: 'white',
  },
  recieptImage: {
    width: wp('40%'),
    height: wp('30'),
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  text: {
    fontSize: wp('3.5%'),
    lineHeight: wp('4%'),
    paddingTop: 10,
  },
  brand: {fontSize: wp('5%'), lineHeight: wp('5%'), paddingTop: 10},
  textWrapper: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },
  mainView: {
    flexDirection: 'row',
    borderRadius: 30,
  },
});

export default styles;
